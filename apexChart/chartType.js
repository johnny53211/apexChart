$(document).ready(async function () {
    let jsondata;
    let args = {
        url: `${baseUrl}/getChartJson`,
        method: 'get',
    }
    let chartResponse = await utils.callApi(args);
    jsondata = chartResponse.data;
    utils.chartData = utils.modifyData(jsondata['deviceChart'], { x: 'date', y: 'working' })
    let chartOptions = {
        type: 'line',
        series: utils.chartData,
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1500
            },
        },
        xAxis: {
            type: 'category',
            categories: [2001, 2002],
            position: 'bottom',
            title: {
                text: "Date",
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: 'black',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-title',
                },
            }
        },
        yAxis: {
            type: 'category',
            categories: [2001, 2002],
            position: 'bottom',
            title: {
                text: "Working Hrs (ex:10 hrs)",
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: 'black',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-title',
                },
            },
            tooltip: {
                enabled: true,
                offsetX: 0,
            },
        },
        toolbar: {
            show: false,
        },
        stroke: {
            curve: 'straight',
        },
        height: "500px",
        container: document.querySelector("#basicLineChart"),
    };
    debugger
    let basicLineChart = apexChart.init(chartOptions);
    basicLineChart.render();
    // ----------------------------------------------------------------------------------------------------------------- //
    //  linear chart with data tables
    chartOptions.dropShadow = {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
    }
    chartOptions.dataLabels = {
        enabled: true,
    }
    chartOptions.markers = {
        size: 1
    }
    chartOptions.stroke.curve = 'smooth'
    chartOptions.container = document.querySelector("#lineDatalabelchart");
    let lineDatalabelchart = apexChart.init(chartOptions);
    lineDatalabelchart.render();

    // /-----------------------------------------------------------------------------------------------------------------/ 
    // synchronise chart
    let SyncroniseChartOneOptions = {
        container: document.querySelector("#SyncroniseChartOne"),
        type: 'line',
        series: utils.chartData,
        group: "device",
        id: 'deviceOne',
        height: "500px",
        legend: {
            show: false
        }
    }
    let SyncroniseChartOne = apexChart.init(SyncroniseChartOneOptions);
    SyncroniseChartOne.render();

    let SyncroniseChartTwoOptions = {
        container: document.querySelector("#SyncroniseChartTwo"),
        type: 'area',
        series: utils.chartData,
        group: "device",
        id: 'deviceTwo',
        height: "500px",
        legend: {
            show: false
        },

    }
    let SyncroniseChartTwo = apexChart.init(SyncroniseChartTwoOptions);
    SyncroniseChartTwo.render();

    // -------------------------------------------------------------------------------------------------------------

    // brush chart 
    let brushChartOneOptions = {
        container: document.querySelector("#brushChartOne"),
        type: 'line',
        series: utils.chartData,
        id: 'brushDeviceOne',
        height: "500px",
        legend: {
            show: false
        },
        toolbar: {
            autoSelected: 'pan',
            show: false
        },
        colors: ['#546E7A'],
        stroke: {
            width: 3
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1,
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        }
    }
    let brushChartOne = apexChart.init(brushChartOneOptions);
    brushChartOne.render();

    let brushChartTwoOptions = {
        container: document.querySelector("#brushChartTwo"),
        type: 'area',
        series: utils.chartData,
        id: 'brushDeviceTwo',
        height: "500px",
        legend: {
            show: false
        },
        brush: {
            target: 'brushDeviceOne',
            enabled: true
        },
        selection: {
            enabled: true,
            xaxis: {
                min: 'Feb 2,2024',
                max: 'Feb 2,2025'
            }
        },
        colors: ['#008FFB'],
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.91,
                opacityTo: 0.1,
            }
        },
        xaxis: {
            type: 'datetime',
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            tickAmount: 2
        }

    }
    let brushChartTwo = apexChart.init(brushChartTwoOptions);
    brushChartTwo.render();
    // -----------------------------------------------------------------------------------------------------

    chartOptions.stroke = {
        curve: 'stepline',
    }
    chartOptions.container = document.querySelector('#SteplineChart');
    let stepLineChart = apexChart.init(chartOptions);
    stepLineChart.render();
    // ------------------------------------------------------------------------------------------------------
    // null chart
    var nullChartOption = {
        series: [
            {
                name: 'Peter',
                data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
            },
            {
                name: 'Johnny',
                data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
            },
            {
                name: 'David',
                data: [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
            }
        ],
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        },
        animations: {
            enabled: false
        },
        stroke: {
            width: [5, 5, 4],
            curve: 'straight'
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        xaxis: {},
        container: document.querySelector('#missingNullChart')
    };
    let nullChart = apexChart.init(nullChartOption);
    nullChart.render();
    // --------------------------------------------------------------------------------------------------------
    // area charts Basic
    chartOptions.container = document.querySelector('#areaChart');
    chartOptions.type = 'area'
    chartOptions.stroke = {
        curve: 'straight',
    }
    let areaChart = apexChart.init(chartOptions);
    areaChart.render();
    // ---------------------------------------------------------------------------------------
    chartOptions.container = document.querySelector('#spilineAreaChart');
    chartOptions.type = 'area'
    chartOptions.stroke = {
        curve: 'smooth',
    }
    let spilineChart = apexChart.init(chartOptions);
    spilineChart.render();

    // ------------------------------------------------------------------------------------------------

    options = {
        series: [{
            data: [
                [1327359600000, 30.95],
                [1327446000000, 31.34],
                [1327532400000, 31.18],
                [1327618800000, 31.05],
                [1327878000000, 31.00],
                [1327964400000, 30.95],
                [1328050800000, 31.24],
                [1328137200000, 31.29],
                [1328223600000, 31.85],
                [1328482800000, 31.86],
                [1328569200000, 32.28],
                [1328655600000, 32.10],
                [1328742000000, 32.65],
                [1328828400000, 32.21],
                [1329087600000, 32.35],
                [1329174000000, 32.44],
                [1329260400000, 32.46],
                [1329346800000, 32.86],
                [1329433200000, 32.75],
                [1329778800000, 32.54],
                [1329865200000, 32.33],
                [1329951600000, 32.97],
                [1330038000000, 33.41],
                [1330297200000, 33.27],
                [1330383600000, 33.27],
                [1330470000000, 32.89],
                [1330556400000, 33.10],
                [1330642800000, 33.73],
                [1330902000000, 33.22],
                [1330988400000, 31.99],
                [1331074800000, 32.41],
                [1331161200000, 33.05],
                [1331247600000, 33.64],
                [1331506800000, 33.56],
                [1331593200000, 34.22],
                [1331679600000, 33.77],
                [1331766000000, 34.17],
                [1331852400000, 33.82],
                [1332111600000, 34.51],
                [1332198000000, 33.16],
                [1332284400000, 33.56],
                [1332370800000, 33.71],
                [1332457200000, 33.81],
                [1332712800000, 34.40],
                [1332799200000, 34.63],
                [1332885600000, 34.46],
                [1332972000000, 34.48],
                [1333058400000, 34.31],
                [1333317600000, 34.70],
                [1333404000000, 34.31],
                [1333490400000, 33.46],
                [1333576800000, 33.59],
                [1333922400000, 33.22],
                [1334008800000, 32.61],
                [1334095200000, 33.01],
                [1334181600000, 33.55],
                [1334268000000, 33.18],
                [1334527200000, 32.84],
                [1334613600000, 33.84],
                [1334700000000, 33.39],
                [1334786400000, 32.91],
                [1334872800000, 33.06],
                [1335132000000, 32.62],
                [1335218400000, 32.40],
                [1335304800000, 33.13],
                [1335391200000, 33.26],
                [1335477600000, 33.58],
                [1335736800000, 33.55],
                [1335823200000, 33.77],
                [1335909600000, 33.76],
                [1335996000000, 33.32],
                [1336082400000, 32.61],
                [1336341600000, 32.52],
                [1336428000000, 32.67],
                [1336514400000, 32.52],
                [1336600800000, 31.92],
                [1336687200000, 32.20],
                [1336946400000, 32.23],
                [1337032800000, 32.33],
                [1337119200000, 32.36],
                [1337205600000, 32.01],
                [1337292000000, 31.31],
                [1337551200000, 32.01],
                [1337637600000, 32.01],
                [1337724000000, 32.18],
                [1337810400000, 31.54],
                [1337896800000, 31.60],
                [1338242400000, 32.05],
                [1338328800000, 31.29],
                [1338415200000, 31.05],
                [1338501600000, 29.82],
                [1338760800000, 30.31],
                [1338847200000, 30.70],
                [1338933600000, 31.69],
                [1339020000000, 31.32],
                [1339106400000, 31.65],
                [1339365600000, 31.13],
                [1339452000000, 31.77],
                [1339538400000, 31.79],
                [1339624800000, 31.67],
                [1339711200000, 32.39],
                [1339970400000, 32.63],
                [1340056800000, 32.89],
                [1340143200000, 31.99],
                [1340229600000, 31.23],
                [1340316000000, 31.57],
                [1340575200000, 30.84],
                [1340661600000, 31.07],
                [1340748000000, 31.41],
                [1340834400000, 31.17],
                [1340920800000, 32.37],
                [1341180000000, 32.19],
                [1341266400000, 32.51],
                [1341439200000, 32.53],
                [1341525600000, 31.37],
                [1341784800000, 30.43],
                [1341871200000, 30.44],
                [1341957600000, 30.20],
                [1342044000000, 30.14],
                [1342130400000, 30.65],
                [1342389600000, 30.40],
                [1342476000000, 30.65],
                [1342562400000, 31.43],
                [1342648800000, 31.89],
                [1342735200000, 31.38],
                [1342994400000, 30.64],
                [1343080800000, 30.02],
                [1343167200000, 30.33],
                [1343253600000, 30.95],
                [1343340000000, 31.89],
                [1343599200000, 31.01],
                [1343685600000, 30.88],
                [1343772000000, 30.69],
                [1343858400000, 30.58],
                [1343944800000, 32.02],
                [1344204000000, 32.14],
                [1344290400000, 32.37],
                [1344376800000, 32.51],
                [1344463200000, 32.65],
                [1344549600000, 32.64],
                [1344808800000, 32.27],
                [1344895200000, 32.10],
                [1344981600000, 32.91],
                [1345068000000, 33.65],
                [1345154400000, 33.80],
                [1345413600000, 33.92],
                [1345500000000, 33.75],
                [1345586400000, 33.84],
                [1345672800000, 33.50],
                [1345759200000, 32.26],
                [1346018400000, 32.32],
                [1346104800000, 32.06],
                [1346191200000, 31.96],
                [1346277600000, 31.46],
                [1346364000000, 31.27],
                [1346709600000, 31.43],
                [1346796000000, 32.26],
                [1346882400000, 32.79],
                [1346968800000, 32.46],
                [1347228000000, 32.13],
                [1347314400000, 32.43],
                [1347400800000, 32.42],
                [1347487200000, 32.81],
                [1347573600000, 33.34],
                [1347832800000, 33.41],
                [1347919200000, 32.57],
                [1348005600000, 33.12],
                [1348092000000, 34.53],
                [1348178400000, 33.83],
                [1348437600000, 33.41],
                [1348524000000, 32.90],
                [1348610400000, 32.53],
                [1348696800000, 32.80],
                [1348783200000, 32.44],
                [1349042400000, 32.62],
                [1349128800000, 32.57],
                [1349215200000, 32.60],
                [1349301600000, 32.68],
                [1349388000000, 32.47],
                [1349647200000, 32.23],
                [1349733600000, 31.68],
                [1349820000000, 31.51],
                [1349906400000, 31.78],
                [1349992800000, 31.94],
                [1350252000000, 32.33],
                [1350338400000, 33.24],
                [1350424800000, 33.44],
                [1350511200000, 33.48],
                [1350597600000, 33.24],
                [1350856800000, 33.49],
                [1350943200000, 33.31],
                [1351029600000, 33.36],
                [1351116000000, 33.40],
                [1351202400000, 34.01],
                [1351638000000, 34.02],
                [1351724400000, 34.36],
                [1351810800000, 34.39],
                [1352070000000, 34.24],
                [1352156400000, 34.39],
                [1352242800000, 33.47],
                [1352329200000, 32.98],
                [1352415600000, 32.90],
                [1352674800000, 32.70],
                [1352761200000, 32.54],
                [1352847600000, 32.23],
                [1352934000000, 32.64],
                [1353020400000, 32.65],
                [1353279600000, 32.92],
                [1353366000000, 32.64],
                [1353452400000, 32.84],
                [1353625200000, 33.40],
                [1353884400000, 33.30],
                [1353970800000, 33.18],
                [1354057200000, 33.88],
                [1354143600000, 34.09],
                [1354230000000, 34.61],
                [1354489200000, 34.70],
                [1354575600000, 35.30],
                [1354662000000, 35.40],
                [1354748400000, 35.14],
                [1354834800000, 35.48],
                [1355094000000, 35.75],
                [1355180400000, 35.54],
                [1355266800000, 35.96],
                [1355353200000, 35.53],
                [1355439600000, 37.56],
                [1355698800000, 37.42],
                [1355785200000, 37.49],
                [1355871600000, 38.09],
                [1355958000000, 37.87],
                [1356044400000, 37.71],
                [1356303600000, 37.53],
                [1356476400000, 37.55],
                [1356562800000, 37.30],
                [1356649200000, 36.90],
                [1356908400000, 37.68],
                [1357081200000, 38.34],
                [1357167600000, 37.75],
                [1357254000000, 38.13],
                [1357513200000, 37.94],
                [1357599600000, 38.14],
                [1357686000000, 38.66],
                [1357772400000, 38.62],
                [1357858800000, 38.09],
                [1358118000000, 38.16],
                [1358204400000, 38.15],
                [1358290800000, 37.88],
                [1358377200000, 37.73],
                [1358463600000, 37.98],
                [1358809200000, 37.95],
                [1358895600000, 38.25],
                [1358982000000, 38.10],
                [1359068400000, 38.32],
                [1359327600000, 38.24],
                [1359414000000, 38.52],
                [1359500400000, 37.94],
                [1359586800000, 37.83],
                [1359673200000, 38.34],
                [1359932400000, 38.10],
                [1360018800000, 38.51],
                [1360105200000, 38.40],
                [1360191600000, 38.07],
                [1360278000000, 39.12],
                [1360537200000, 38.64],
                [1360623600000, 38.89],
                [1360710000000, 38.81],
                [1360796400000, 38.61],
                [1360882800000, 38.63],
                [1361228400000, 38.99],
                [1361314800000, 38.77],
                [1361401200000, 38.34],
                [1361487600000, 38.55],
                [1361746800000, 38.11],
                [1361833200000, 38.59],
                [1361919600000, 39.60],
            ]
        }],
        chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
                autoScaleYaxis: true
            }
        },
        annotations: {
            yaxis: [{
                y: 30,
                borderColor: '#999',
                label: {
                    show: true,
                    text: 'Support',
                    style: {
                        color: "#fff",
                        background: '#00E396'
                    }
                }
            }],
            xaxis: [{
                x: new Date('14 Nov 2012').getTime(),
                borderColor: '#999',
                yAxisIndex: 0,
                label: {
                    show: true,
                    text: 'Rally',
                    style: {
                        color: "#fff",
                        background: '#775DD0'
                    }
                }
            }]
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
    };

    var chart = new ApexCharts(document.querySelector("#dateTimeAreaChart"), options);
    chart.render();


    var resetCssClasses = function (activeEl) {
        var els = document.querySelectorAll('button')
        Array.prototype.forEach.call(els, function (el) {
            el.classList.remove('active')
        })

        activeEl.target.classList.add('active')
    }

    document
        .querySelector('#one_month')
        .addEventListener('click', function (e) {
            resetCssClasses(e)

            chart.zoomX(
                new Date('28 Jan 2013').getTime(),
                new Date('27 Feb 2013').getTime()
            )
        })

    document
        .querySelector('#six_months')
        .addEventListener('click', function (e) {
            resetCssClasses(e)

            chart.zoomX(
                new Date('27 Sep 2012').getTime(),
                new Date('27 Feb 2013').getTime()
            )
        })

    document
        .querySelector('#one_year')
        .addEventListener('click', function (e) {
            resetCssClasses(e)
            chart.zoomX(
                new Date('27 Feb 2012').getTime(),
                new Date('27 Feb 2013').getTime()
            )
        })

    // document.querySelector('#ytd').addEventListener('click', function (e) {
    //     resetCssClasses(e)

    //     chart.zoomX(
    //         new Date('01 Jan 2013').getTime(),
    //         new Date('27 Feb 2013').getTime()
    //     )
    // })

    document.querySelector('#all').addEventListener('click', function (e) {
        resetCssClasses(e)

        chart.zoomX(
            new Date('23 Jan 2012').getTime(),
            new Date('27 Feb 2013').getTime()
        )
    })
    // -------------------------------------------------------------------------------------------------------

    chartOptions.series = [{
        name: 'north',
        data: [{
            x: 1996,
            y: 322
        },
        {
            x: 1997,
            y: 324
        },
        {
            x: 1998,
            y: 329
        },
        {
            x: 1999,
            y: 342
        },
        {
            x: 2000,
            y: 348
        },
        {
            x: 2001,
            y: 334
        },
        {
            x: 2002,
            y: 325
        },
        {
            x: 2003,
            y: 316
        },
        {
            x: 2004,
            y: 318
        },
        {
            x: 2005,
            y: 330
        },
        {
            x: 2006,
            y: 355
        },
        {
            x: 2007,
            y: 366
        },
        {
            x: 2008,
            y: 337
        },
        {
            x: 2009,
            y: 352
        },
        {
            x: 2010,
            y: 377
        },
        {
            x: 2011,
            y: 383
        },
        {
            x: 2012,
            y: 344
        },
        {
            x: 2013,
            y: 366
        },
        {
            x: 2014,
            y: 389
        },
        {
            x: 2015,
            y: 334
        }
        ]
    }, {
        name: 'south',
        data: [
            {
                x: 1996,
                y: 162
            },
            {
                x: 1997,
                y: 90
            },
            {
                x: 1998,
                y: 50
            },
            {
                x: 1999,
                y: 77
            },
            {
                x: 2000,
                y: 35
            },
            {
                x: 2001,
                y: -45
            },
            {
                x: 2002,
                y: -88
            },
            {
                x: 2003,
                y: -120
            },
            {
                x: 2004,
                y: -156
            },
            {
                x: 2005,
                y: -123
            },
            {
                x: 2006,
                y: -88
            },
            {
                x: 2007,
                y: -66
            },
            {
                x: 2008,
                y: -45
            },
            {
                x: 2009,
                y: -29
            },
            {
                x: 2010,
                y: -45
            },
            {
                x: 2011,
                y: -88
            },
            {
                x: 2012,
                y: -132
            },
            {
                x: 2013,
                y: -146
            },
            {
                x: 2014,
                y: -169
            },
            {
                x: 2015,
                y: -184
            }
        ]
    }]
    chartOptions.type = 'area';
    chartOptions.container = document.querySelector('#negativeAreaChart')
    let negativeChart = apexChart.init(chartOptions);
    negativeChart.render()

    // ----------------------------------------------------------------------------------------------
    chartOptions.type = 'bar';
    chartOptions.container = document.querySelector('#columnChartNegative')
    let columnChratNegative = apexChart.init(chartOptions);
    columnChratNegative.render();
    // ------------------------------------------------------------------------------------------------
    chartOptions.type = 'bar';
    chartOptions.container = document.querySelector('#columnChart');
    chartOptions.series = utils.chartData;
    let columnChrat = apexChart.init(chartOptions);
    columnChrat.render();
    // ------------------------------------------------------------------------------------------------
    // data labels
    chartOptions.dataLabels = {
        enabled: true,
        formatter: function (val) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    };
    chartOptions.container = document.querySelector('#columnChartdataLabel');
    let columnChartdataLabel = apexChart.init(chartOptions);
    columnChartdataLabel.render();
    // -----------------------------------------------------------------------------------------------------------

    chartOptions.responsive = [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }]
    chartOptions.plotOptions = {
        bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
                total: {
                    enabled: true,
                    style: {
                        fontSize: '13px',
                        fontWeight: 900
                    }
                }
            }
        },
    };
    chartOptions.series = [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43]
    }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27]
    }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14]
    }, {
        name: 'PRODUCT D',
        data: [21, 7, 25, 13, 22, 8]
    }]
    chartOptions.container = document.querySelector('#stackedColumnChrat');
    chartOptions.xAxis = {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT'
        ],
    }
    chartOptions.legend = {
        position: 'right',
        offsetY: 40
    }
    chartOptions.fill = {
        opacity: 1
    }
    chartOptions.stackType = '100%'
    chartOptions.stacked = true
    let stackedColumnChrat = apexChart.init(chartOptions);
    stackedColumnChrat.render();

    // ----------------------------------------------------------------------------------------------------------

    // group column chart
    let groupColumnChart = {
        series: [
            {
                name: 'Q1 Budget',
                group: 'budget',
                data: [44000, 55000, 41000, 67000, 22000, 43000]
            },
            {
                name: 'Q1 Actual',
                group: 'actual',
                data: [48000, 50000, 40000, 65000, 25000, 40000]
            },
            {
                name: 'Q2 Budget',
                group: 'budget',
                data: [13000, 36000, 20000, 8000, 13000, 27000]
            },
            {
                name: 'Q2 Actual',
                group: 'actual',
                data: [20000, 40000, 25000, 10000, 12000, 28000]
            }
        ],

        type: 'bar',
        height: 350,
        stacked: true,

        stroke: {
            width: 1,
            colors: ['#fff']
        },
        dataLabels: {
            formatter: (val) => {
                return val / 1000 + 'K'
            }
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        xaxis: {
            categories: [
                'Online advertising',
                'Sales Training',
                'Print advertising',
                'Catalogs',
                'Meetings',
                'Public relations'
            ]
        },
        fill: {
            opacity: 1
        },
        colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
        yaxis: {
            labels: {
                formatter: (val) => {
                    return val / 1000 + 'K'
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        container: document.querySelector('#groupColumnChrat')
    };
    let gropuColumnChrat = apexChart.init(groupColumnChart);
    gropuColumnChrat.render();
    // --------------------------------------------------------------------------------------------
    chartOptions.stackType = ''
    chartOptions.stacked = false;
    chartOptions.container = document.querySelector('#groupColumnChrat');
    chartOptions.series = [
        {
            data: [
                {
                    x: '2008',
                    y: [2800, 4500]
                },
                {
                    x: '2009',
                    y: [3200, 4100]
                },
                {
                    x: '2010',
                    y: [2950, 7800]
                },
                {
                    x: '2011',
                    y: [3000, 4600]
                },
                {
                    x: '2012',
                    y: [3500, 4100]
                },
                {
                    x: '2013',
                    y: [4500, 6500]
                },
                {
                    x: '2014',
                    y: [4100, 5600]
                }
            ]
        }
    ]
    chartOptions.type = 'rangeBar';
    chartOptions.plotOptions = {
        bar: {
            isDumbbell: true,
            columnWidth: 3,
            dumbbellColors: [['#008FFB', '#00E396']]
        }
    }
    chartOptions.xAxis = {
        tickPlacement: 'on'
    }
    chartOptions.grid = {
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    }
    chartOptions.plotOptions = {
        bar: {
            isDumbbell: true,
            columnWidth: 3,
            dumbbellColors: [['#008FFB', '#00E396']]
        },
    }
    chartOptions.legend = {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['Product A', 'Product B']
    }
    let dumbellChart = apexChart.init(chartOptions);
    dumbellChart.render();
    // 
    let columnWithMarkers = {
        series: [
            {
                name: 'Actual',
                data: [
                    {
                        x: '2011',
                        y: 1292,
                        goals: [
                            {
                                name: 'Expected',
                                value: 1400,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2012',
                        y: 4432,
                        goals: [
                            {
                                name: 'Expected',
                                value: 5400,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2013',
                        y: 5423,
                        goals: [
                            {
                                name: 'Expected',
                                value: 5200,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2014',
                        y: 6653,
                        goals: [
                            {
                                name: 'Expected',
                                value: 6500,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2015',
                        y: 8133,
                        goals: [
                            {
                                name: 'Expected',
                                value: 6600,
                                strokeHeight: 13,
                                strokeWidth: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2016',
                        y: 7132,
                        goals: [
                            {
                                name: 'Expected',
                                value: 7500,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2017',
                        y: 7332,
                        goals: [
                            {
                                name: 'Expected',
                                value: 8700,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2018',
                        y: 6553,
                        goals: [
                            {
                                name: 'Expected',
                                value: 7300,
                                strokeHeight: 2,
                                strokeDashArray: 2,
                                strokeColor: '#775DD0'
                            }
                        ]
                    }
                ]
            }
        ],

        height: 350,
        type: 'bar'
        ,
        plotOptions: {
            bar: {
                columnWidth: '60%'
            }
        },
        colors: ['#00E396'],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Actual', 'Expected'],
            markers: {
                fillColors: ['#00E396', '#775DD0']
            }
        },
        container: document.querySelector('#columnWithMarker')
    };
    let columnWithMarker = apexChart.init(columnWithMarkers);
    columnWithMarker.render();

    // ---------------------------------------------------------------------------------------------------------------

    chartOptions.plotOptions = {
        bar: {
            borderRadius: 4,
            horizontal: true,
        }
    }
    chartOptions.type = 'bar'
    chartOptions.container = document.querySelector('#barChart')
    chartOptions.series = utils.chartData
    let barChart = apexChart.init(chartOptions);

    barChart.render();
    // ----------------------------------------------------------------------------------------------------------------------

    chartOptions.series = [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
    }]
    let stackedChart = apexChart.init(chartOptions);
    stackedChart.render()

    // --------------------------------------------------------------------------------------------------------------
    chartOptions.stacked = true
    chartOptions.stackType = '100%';
    chartOptions.container = document.querySelector('#barChartStackedPercentage')
    let stackedPercentage = apexChart.init(chartOptions);
    stackedPercentage.render()
    chartOptions.stacked = false
    chartOptions.stackType = '';
    // ------------------------------------------------------------------------------------------------------------------

    chartOptions.fill = {
        type: 'pattern',
        opacity: 1,
        pattern: {
            style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

        }
    }
    chartOptions.series = [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }]
    chartOptions.container = document.querySelector('#barChartStackedPattern');
    let patternChartBar = apexChart.init(chartOptions);
    patternChartBar.render();
    chartOptions.fill = {};
    chartOptions.plotOptions = {}
    // ---------------------- ----------------------------------------------------------------------------------------------
    // mixed charts 
    chartOptions.series = [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }];
    chartOptions.stroke = {
        width: [0, 4]
    };
    chartOptions.type = 'line'
    chartOptions.container = document.querySelector('#mixedChart');
    let MixedChart = apexChart.init(chartOptions);
    MixedChart.render();
    // -----------------------------------------------------------------------------------------------------------------

    let areaColumn = {
        series: [{
            name: 'TEAM A',
            type: 'area',
            data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
        }, {
            name: 'TEAM B',
            type: 'line',
            data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
        }],

        height: 350,
        type: 'line',
        container: document.querySelector('#areaColumnChart'),
        stroke: {
            curve: 'smooth'
        },
        fill: {
            type: 'solid',
            opacity: [0.35, 1],
        },
        labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
        markers: {
            size: 0
        },
        yaxis: [
            {
                title: {
                    text: 'Series A',
                },
            },
            {
                opposite: true,
                title: {
                    text: 'Series B',
                },
            },
        ],
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;
                }
            }
        }
    }
    let areacolumnChart = apexChart.init(areaColumn);
    areacolumnChart.render();
    // -------------------------------------------------------------------------------------------------------------------------------

    chartOptions.stroke = {
        curve: 'straight'
    }
    chartOptions.type = 'rangeArea';
    chartOptions.series = [
        {
            name: 'New York Temperature',
            data: [
                {
                    x: 'Jan',
                    y: [-2, 4]
                },
                {
                    x: 'Feb',
                    y: [-1, 6]
                },
                {
                    x: 'Mar',
                    y: [3, 10]
                },
                {
                    x: 'Apr',
                    y: [8, 16]
                },
                {
                    x: 'May',
                    y: [13, 22]
                },
                {
                    x: 'Jun',
                    y: [18, 26]
                },
                {
                    x: 'Jul',
                    y: [21, 29]
                },
                {
                    x: 'Aug',
                    y: [21, 28]
                },
                {
                    x: 'Sep',
                    y: [17, 24]
                },
                {
                    x: 'Oct',
                    y: [11, 18]
                },
                {
                    x: 'Nov',
                    y: [6, 12]
                },
                {
                    x: 'Dec',
                    y: [1, 7]
                }
            ]
        }
    ]
    chartOptions.container = document.querySelector('#rangeAreaChart');
    let rangeAreaChart = apexChart.init(chartOptions);
    rangeAreaChart.render();
    // ------------------------------------------------------------------------------
    chartOptions.plotOptions = {
        bar: {
            horizontal: true
        }
    }
    chartOptions.type = "rangeBar"
    chartOptions.xAxis = {
        type: 'datetime'
    }
    chartOptions.container = document.querySelector('#timeLineChart');
    chartOptions.series = [
        {
            data: [
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-04').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-04').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-12').getTime()
                    ]
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-12').getTime(),
                        new Date('2019-03-18').getTime()
                    ]
                }
            ]
        }
    ]
    let timeLineChart = apexChart.init(chartOptions);
    timeLineChart.render();
    // ------------------------------------------------------------------------------------------------
    chartOptions.plotOptions = {
        bar: {
            horizontal: true
        }
    }
    chartOptions.type = "rangeBar"
    chartOptions.dataLabels = {
        enabled: true,
        // formatter: function (val) {
        //     var a = moment(val[0])
        //     var b = moment(val[1])
        //     var diff = b.diff(a, 'days')
        //     return diff + (diff > 1 ? ' days' : ' day')
        // }
    }
    chartOptions.fill = {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        }
    }
    chartOptions.xAxis = {
        type: 'datetime'
    }
    chartOptions.container = document.querySelector('#multiSeriesChart');
    chartOptions.series = [
        {
            name: 'Bob',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-11').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-11').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                }
            ]
        },
        {
            name: 'Joe',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-06').getTime(),
                        new Date('2019-03-09').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-19').getTime()
                    ]
                }
            ]
        }
    ];
    let multiSeries = apexChart.init(chartOptions);
    multiSeries.render();
    // ------------------------------------------------------------------------------------------------------------

    chartOptions.container = document.querySelector('#funnelChart');
    // funneral chart
    chartOptions.series = [
        {
            name: "Funnel Series",
            data: [1380, 1100, 990, 880, 740, 548, 330, 200],
        },
    ]
    chartOptions.type = 'bar'
    chartOptions.plotOptions = {
        bar: {
            borderRadius: 0,
            horizontal: true,
            barHeight: '80%',
            isFunnel: true,
        },
    }
    chartOptions.xAxis = {
        categories: [
            'Sourced',
            'Screened',
            'Assessed',
            'HR Interview',
            'Technical',
            'Verify',
            'Offered',
            'Hired',
        ],
    }
    let funnelChart = apexChart.init(chartOptions);
    funnelChart.render();
    // -----------------------------------------------------------------------------------------------------
    // candle stick chart
    let candleStickOptions = {
        series: [{
            data: [
                {
                    x: new Date(1538778600000),
                    y: [6629.81, 6650.5, 6623.04, 6633.33]
                },
                {
                    x: new Date(1538780400000),
                    y: [6632.01, 6643.59, 6620, 6630.11]
                },
                {
                    x: new Date(1538782200000),
                    y: [6630.71, 6648.95, 6623.34, 6635.65]
                },
                {
                    x: new Date(1538784000000),
                    y: [6635.65, 6651, 6629.67, 6638.24]
                },
                {
                    x: new Date(1538785800000),
                    y: [6638.24, 6640, 6620, 6624.47]
                },
                {
                    x: new Date(1538787600000),
                    y: [6624.53, 6636.03, 6621.68, 6624.31]
                },
                {
                    x: new Date(1538789400000),
                    y: [6624.61, 6632.2, 6617, 6626.02]
                },
                {
                    x: new Date(1538791200000),
                    y: [6627, 6627.62, 6584.22, 6603.02]
                },
                {
                    x: new Date(1538793000000),
                    y: [6605, 6608.03, 6598.95, 6604.01]
                },
                {
                    x: new Date(1538794800000),
                    y: [6604.5, 6614.4, 6602.26, 6608.02]
                },
                {
                    x: new Date(1538796600000),
                    y: [6608.02, 6610.68, 6601.99, 6608.91]
                },
                {
                    x: new Date(1538798400000),
                    y: [6608.91, 6618.99, 6608.01, 6612]
                },
                {
                    x: new Date(1538800200000),
                    y: [6612, 6615.13, 6605.09, 6612]
                },
                {
                    x: new Date(1538802000000),
                    y: [6612, 6624.12, 6608.43, 6622.95]
                },
                {
                    x: new Date(1538803800000),
                    y: [6623.91, 6623.91, 6615, 6615.67]
                },
                {
                    x: new Date(1538805600000),
                    y: [6618.69, 6618.74, 6610, 6610.4]
                },
                {
                    x: new Date(1538807400000),
                    y: [6611, 6622.78, 6610.4, 6614.9]
                },
                {
                    x: new Date(1538809200000),
                    y: [6614.9, 6626.2, 6613.33, 6623.45]
                },
                {
                    x: new Date(1538811000000),
                    y: [6623.48, 6627, 6618.38, 6620.35]
                },
                {
                    x: new Date(1538812800000),
                    y: [6619.43, 6620.35, 6610.05, 6615.53]
                },
                {
                    x: new Date(1538814600000),
                    y: [6615.53, 6617.93, 6610, 6615.19]
                },
                {
                    x: new Date(1538816400000),
                    y: [6615.19, 6621.6, 6608.2, 6620]
                },
                {
                    x: new Date(1538818200000),
                    y: [6619.54, 6625.17, 6614.15, 6620]
                },
                {
                    x: new Date(1538820000000),
                    y: [6620.33, 6634.15, 6617.24, 6624.61]
                },
                {
                    x: new Date(1538821800000),
                    y: [6625.95, 6626, 6611.66, 6617.58]
                },
                {
                    x: new Date(1538823600000),
                    y: [6619, 6625.97, 6595.27, 6598.86]
                },
                {
                    x: new Date(1538825400000),
                    y: [6598.86, 6598.88, 6570, 6587.16]
                },
                {
                    x: new Date(1538827200000),
                    y: [6588.86, 6600, 6580, 6593.4]
                },
                {
                    x: new Date(1538829000000),
                    y: [6593.99, 6598.89, 6585, 6587.81]
                },
                {
                    x: new Date(1538830800000),
                    y: [6587.81, 6592.73, 6567.14, 6578]
                },
                {
                    x: new Date(1538832600000),
                    y: [6578.35, 6581.72, 6567.39, 6579]
                },
                {
                    x: new Date(1538834400000),
                    y: [6579.38, 6580.92, 6566.77, 6575.96]
                },
                {
                    x: new Date(1538836200000),
                    y: [6575.96, 6589, 6571.77, 6588.92]
                },
                {
                    x: new Date(1538838000000),
                    y: [6588.92, 6594, 6577.55, 6589.22]
                },
                {
                    x: new Date(1538839800000),
                    y: [6589.3, 6598.89, 6589.1, 6596.08]
                },
                {
                    x: new Date(1538841600000),
                    y: [6597.5, 6600, 6588.39, 6596.25]
                },
                {
                    x: new Date(1538843400000),
                    y: [6598.03, 6600, 6588.73, 6595.97]
                },
                {
                    x: new Date(1538845200000),
                    y: [6595.97, 6602.01, 6588.17, 6602]
                },
                {
                    x: new Date(1538847000000),
                    y: [6602, 6607, 6596.51, 6599.95]
                },
                {
                    x: new Date(1538848800000),
                    y: [6600.63, 6601.21, 6590.39, 6591.02]
                },
                {
                    x: new Date(1538850600000),
                    y: [6591.02, 6603.08, 6591, 6591]
                },
                {
                    x: new Date(1538852400000),
                    y: [6591, 6601.32, 6585, 6592]
                },
                {
                    x: new Date(1538854200000),
                    y: [6593.13, 6596.01, 6590, 6593.34]
                },
                {
                    x: new Date(1538856000000),
                    y: [6593.34, 6604.76, 6582.63, 6593.86]
                },
                {
                    x: new Date(1538857800000),
                    y: [6593.86, 6604.28, 6586.57, 6600.01]
                },
                {
                    x: new Date(1538859600000),
                    y: [6601.81, 6603.21, 6592.78, 6596.25]
                },
                {
                    x: new Date(1538861400000),
                    y: [6596.25, 6604.2, 6590, 6602.99]
                },
                {
                    x: new Date(1538863200000),
                    y: [6602.99, 6606, 6584.99, 6587.81]
                },
                {
                    x: new Date(1538865000000),
                    y: [6587.81, 6595, 6583.27, 6591.96]
                },
                {
                    x: new Date(1538866800000),
                    y: [6591.97, 6596.07, 6585, 6588.39]
                },
                {
                    x: new Date(1538868600000),
                    y: [6587.6, 6598.21, 6587.6, 6594.27]
                },
                {
                    x: new Date(1538870400000),
                    y: [6596.44, 6601, 6590, 6596.55]
                },
                {
                    x: new Date(1538872200000),
                    y: [6598.91, 6605, 6596.61, 6600.02]
                },
                {
                    x: new Date(1538874000000),
                    y: [6600.55, 6605, 6589.14, 6593.01]
                },
                {
                    x: new Date(1538875800000),
                    y: [6593.15, 6605, 6592, 6603.06]
                },
                {
                    x: new Date(1538877600000),
                    y: [6603.07, 6604.5, 6599.09, 6603.89]
                },
                {
                    x: new Date(1538879400000),
                    y: [6604.44, 6604.44, 6600, 6603.5]
                },
                {
                    x: new Date(1538881200000),
                    y: [6603.5, 6603.99, 6597.5, 6603.86]
                },
                {
                    x: new Date(1538883000000),
                    y: [6603.85, 6605, 6600, 6604.07]
                },
                {
                    x: new Date(1538884800000),
                    y: [6604.98, 6606, 6604.07, 6606]
                },
            ]
        }],
        type: 'candlestick',
        height: 350,
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            tooltip: {
                enabled: true
            }
        },
        container: document.querySelector('#candlestickChart')
    };
    let candleStick = apexChart.init(candleStickOptions);
    candleStick.render()
    // =========================================================================================================== //
    // simple pie chart
    let pieChartOptions = {
        series: [44, 55, 13, 43, 22],
        width: 380,
        type: 'pie',
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        container: document.querySelector('#pieChart')
    };
    let pieChart = apexChart.init(pieChartOptions);
    pieChart.render();
    // ==================================================================================================//
    pieChartOptions.type = 'donut';
    pieChartOptions.container = document.querySelector('#donut');
    let donutChart = apexChart.init(pieChartOptions);
    donutChart.render()
    // ================================================================================================== //
    // semi donut
    pieChartOptions.container = document.querySelector('#semiDonut');
    pieChartOptions.plotOptions = {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10
        }
    }
    pieChartOptions.grid = {
        padding: {
            bottom: -80
        }
    }
    let semiDonut = apexChart.init(pieChartOptions);
    semiDonut.render()
    // ================================================================================================== //
    // donut with pattern 
    pieChartOptions.fill = {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
        },
    }
    pieChartOptions.container = document.querySelector('#patternDonut');
    let patternDonutChart = apexChart.init(pieChartOptions);
    patternDonutChart.render()
    // ================================================================================================== //
    // boxplotchart
    let boxPlotChartOptions = {
        series: [
            {
                type: 'boxPlot',
                data: [
                    {
                        x: 'Jan 2015',
                        y: [54, 66, 69, 75, 88]
                    },
                    {
                        x: 'Jan 2016',
                        y: [43, 65, 69, 76, 81]
                    },
                    {
                        x: 'Jan 2017',
                        y: [31, 39, 45, 51, 59]
                    },
                    {
                        x: 'Jan 2018',
                        y: [39, 46, 55, 65, 71]
                    },
                    {
                        x: 'Jan 2019',
                        y: [29, 31, 35, 39, 44]
                    },
                    {
                        x: 'Jan 2020',
                        y: [41, 49, 58, 61, 67]
                    },
                    {
                        x: 'Jan 2021',
                        y: [54, 59, 66, 71, 88]
                    }
                ]
            }
        ],
        type: 'boxPlot',
        height: 350,
        title: {
            text: 'Basic BoxPlot Chart',
            align: 'left'
        },
        plotOptions: {
            boxPlot: {
                colors: {
                    upper: '#5C4742',
                    lower: '#A5978B'
                }
            }
        },
        container: document.querySelector('#boxPlotChart')
    };
    let boxPlotChart = apexChart.init(boxPlotChartOptions);
    boxPlotChart.render();
    // ==================================================================================================== //
    // 
    boxPlotChartOptions.series = [
        {
            name: 'box',
            type: 'boxPlot',
            data: [
                {
                    x: new Date('2017-01-01').getTime(),
                    y: [54, 66, 69, 75, 88]
                },
                {
                    x: new Date('2018-01-01').getTime(),
                    y: [43, 65, 69, 76, 81]
                },
                {
                    x: new Date('2019-01-01').getTime(),
                    y: [31, 39, 45, 51, 59]
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: [39, 46, 55, 65, 71]
                },
                {
                    x: new Date('2021-01-01').getTime(),
                    y: [29, 31, 35, 39, 44]
                }
            ]
        },
        {
            name: 'outliers',
            type: 'scatter',
            data: [
                {
                    x: new Date('2017-01-01').getTime(),
                    y: 32
                },
                {
                    x: new Date('2018-01-01').getTime(),
                    y: 25
                },
                {
                    x: new Date('2019-01-01').getTime(),
                    y: 64
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: 27
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: 78
                },
                {
                    x: new Date('2021-01-01').getTime(),
                    y: 15
                }
            ]
        }
    ]
    boxPlotChartOptions.container = document.querySelector('#boxPlotScatterChart');
    let boxScatterChart = apexChart.init(boxPlotChartOptions);
    boxScatterChart.render()
    // ===================================================================================================== //
    boxPlotChartOptions.plotOptions = {
        bar: {
            horizontal: true,
            barHeight: '50%'
        },
        boxPlot: {
            colors: {
                upper: '#e9ecef',
                lower: '#f8f9fa'
            }
        }
    };
    boxPlotChartOptions.container = document.querySelector('#boxPlotHorizontalChart');
    let boxHorizontalChart = apexChart.init(boxPlotChartOptions);
    boxHorizontalChart.render();
    // ======================================================================================================== //
    // bubble chart

    let bubbleChartOptions = {

        type: 'bubble',
        height: 400,
        container: document.querySelector('#bubbleChart'),
        series: [{
            name: 'Bubble Chart',
            data: [
                { x: 10, y: 20, z: 30 },
                { x: 15, y: 25, z: 20 },
                { x: 25, y: 10, z: 15 },
                // Add more data points as needed
            ],
        }],
        xAxis: {
            title: {
                text: 'X-axis',
            },
        },
        yAxis: {
            title: {
                text: 'Y-axis',
            },
        },
        theme: {
            palette: 'palette2'
        }
    };
    let bubleChart = apexChart.init(bubbleChartOptions).render();
    // =================================================================================================== //
    // sactter Charts
    let scatterChartOptions = {
        series: [{
            name: "SAMPLE A",
            data: [
                [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
        }, {
            name: "SAMPLE B",
            data: [
                [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
        }, {
            name: "SAMPLE C",
            data: [
                [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
        }],

        height: 350,
        type: 'scatter',
        zoom: {
            enabled: true,
            type: 'xy'
        },
        xAxis: {
            tickAmount: 10,
            labels: {
                formatter: function (val) {
                    return parseFloat(val).toFixed(1)
                }
            }
        },
        yAxis: {
            tickAmount: 7
        },
        container: document.querySelector('#scatterChart')
    };

    let scatterChart = apexChart.init(scatterChartOptions).render();

    // ================================================================================================= //
    let heatMapOptions = {
        series: [{
            data: utils.transformData(jsondata['heatMap'], { x: 'x', y: 'y', value: 'value' }),
        }],
        type: 'heatmap',
        height: 350,
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: 'category',
        },
        plotOptions: {
            heatmap: {
                radius: 10,
                enableShades: false,
                colorScale: {
                    ranges: [
                        {
                            from: 0,
                            to: 20,
                            color: '#D8E0BD',
                        },
                        {
                            from: 21,
                            to: 40,
                            color: '#9BCD9B',
                        },
                        {
                            from: 41,
                            to: 60,
                            color: '#6B8E23',
                        },
                    ],
                },
            },
        },
        container: document.querySelector('#heatMapChart')
    };
    let heatMapChart = apexChart.init(heatMapOptions).render();
    // ====================================================================================================== //
    let treeMapChartOptions = {
        series: [
            {
                data: utils.chartData
            }
        ],
        legend: {
            show: false
        },
        height: 350,
        type: 'treemap',
        container: document.querySelector('#treeMapChart'),
        title: {
            text: 'Basic Treemap'
        }
    };
    let tremapChart = apexChart.init(treeMapChartOptions).render()
})