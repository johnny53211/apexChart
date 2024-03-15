import apexChart from "./ApexPlugin-1.js";
let initApexChart = function () {
    // Create a new div element
    var newDiv = document.createElement("div");
    // Set an id attribute for the div
    newDiv.id = "basicLineChart";
    // Append the div to the body of the document
    document.body.appendChild(newDiv);
}
initApexChart()
let chartOptions = {
    type: 'line',
    series: [
        {
            name: 'device one',
            data: [
                {
                    x: '21', y: '34'
                },
                {
                    x: '42', y: '12'
                }
            ]
        }
    ],
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
}
let basicLineChart = apexChart.init(chartOptions);
basicLineChart.render();