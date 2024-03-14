let utils = {
    chartData: '',
    "modifyData": (devices, coOrdinates) => {
        let { x, y, triggerChart, label } = coOrdinates;
        const modifiedDevices = [];

        for (const device of devices) {
            let modifiedDevice;
            if (triggerChart == 'apex') {
                modifiedDevice = {
                    name: device[label],
                    data: []
                };
            } else {
                modifiedDevice = {
                    name: device[label],
                    data: []
                };
            }
            for (const dataPoint of device.data) {
                const keys = Object.keys(dataPoint);
                if (keys.length >= 2) {
                    modifiedDevice.data.push({
                        x: dataPoint[x],
                        y: (typeof y == 'object') ? utils.extractAndPush(dataPoint, y) : dataPoint[y],
                    });
                }
            }
            modifiedDevices.push(modifiedDevice);
        }

        return modifiedDevices;
    },
    extractAndPush: function (objWithValue, objWithKey) {
        const extarctArray = []
        for (const keyName of Object.values(objWithKey)) {
            const extractedValue = objWithValue[keyName];
            extarctArray.push(extractedValue);
        }
        return extarctArray;
    },
    "getJson": function (url) {
        return $.get(url, function (data) {
            return data;
        });
    },
    "getRandomInt": function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getObjects: function (obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(self.getObjects(obj[i], key, val));
            } else if (i == key && obj[key] == val) {
                objects.push(obj);
            }
        }
        return objects;
    },
    updateData: function (data, selector) {
        let { x, y } = selector;
        // Loop through each device's data
        for (const device of data) {
            const entries = device.data;

            // Update date for each entry
            for (const entry of entries) {
                // Convert existing date string to a Date object
                const prevDate = new Date(entry[`${x}`]);

                // Add one day to the date
                prevDate.setDate(prevDate.getDate() + 1);

                // Format the updated date as "MMM DD YYYY" string
                const newDate = prevDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });

                // Update the date property
                entry[`${x}`] = newDate;

                // Generate a random working value between 0 and 23
                entry[`${y}`] = utils.getRandomInt(0, 23);
            }
        }

        // Return the modified data
        return data;
    },
    "callApi": function (args) {
        return $.ajax({
            type: args.method,
            url: args.url,
            data: args.dataString,
            contentType: args.contentType || "application/x-www-form-urlencoded", // Set youdesired Content-Type
            timeout: args.timeout || 0,
            // Add any other headers if needed
            success: async function (data) {
                if (typeof args.successCallback != "undefined") {
                    args.data = data;
                    await args.successCallback(args);
                }
            },
            error: function (error) {
                if (typeof args.errorCallback != "undefined")
                    args.errorCallback(error);
            }
        });
    },
    chartUpdateMqtt(object) {
        const { device, data } = object;

        // Find the device index using a more efficient method
        const deviceIndex = utils.chartData.findIndex(item => item.label === device);

        // Check if the device exists and throw an error if not
        if (deviceIndex === -1) {
            throw new Error(`Device "${device}" not found in the data.`);
        }

        // Access the device's data array and modify it directly
        const deviceData = utils.chartData[deviceIndex].data;
        deviceData.shift(); // Remove the first element

        // If data exists, update and push new entries
        if (data && data.length) {
            for (const element of data) {
                const updatedElement = utils.updateKey(element, { x: 'date', y: 'working' });
                deviceData.push(updatedElement);
            }
        }

        // Update the chart data directly
        utils.chartData[deviceIndex] = {
            label: device,
            data: deviceData,
        };

        // Update the chart using apexChart (assuming apexChart is defined elsewhere)
        apexChart.updateSeries(dateChart, utils.chartData);
        apexChart.updateSeries(barChart, utils.chartData);
    },
    updateKey: function (obj, selector) {
        let { x, y, value } = selector
        const newObj = {
            x: obj[x],
            y: obj[y],
            value: obj[value] || ''
        }
        // Return the new object with modified key names if applicable
        return newObj;
    },
    transformData: function (inputData, selector) {
        let { x, y, value } = selector
        return inputData.map(item => ({
            x: item[x],
            y: item[y],
            value: value || ''
        }));
    }
}