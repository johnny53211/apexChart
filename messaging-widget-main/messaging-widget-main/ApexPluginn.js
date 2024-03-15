import * as ApexCharts from 'apexcharts';
let apexChart = {
    "container": document.querySelector("#chart"),
    'init': (args) => {
        let container = args.container || apexChart.container;
        let options = apexChart.checkChartOptions(args);
        let chart = new ApexCharts(container, options);
        return chart;
    },
    "checkChartOptions": (options) => {
        let chartOptions = {
            chart: {
                toolbar: options.toolbar || {},
                stackType: options.stackType || '',
                stacked: options.stacked || false,
                animations: options.animations || {},
                background: options.background || '#fff',
                brush: options.brush || {},
                dropShadow: options.dropShadow || {},
                offsetX: options.offsetX || 0,
                height: options.height || 'auto',
                events: options.event || {},
                offsetY: options.offsetY || 0,
                selection: options.selection || {},
                type: options.type,
                width: options.width || '100%',
                group: options.group || '',
                id: options.id || '',
                dropShadow: options.dropShadow || {}
            },
            noData: {
                text: options.noDataTitle || 'Loading...'
            },
            dataLabels: options.dataLabels || {},
            colors: options.colors || [],
            series: options.series || [],
            title: options.title || {},
            xaxis: options.xAxis || {},
            yaxis: options.yAxis || {},
            tooltip: options.tooltip || {},
            stroke: options.stroke || {},
            responsive: options.responsive || [],
            plotOptions: options.plotOptions || {},
            markers: options.markers || {},
            legend: options.legend || {},
            fill: options.fill || {},
            grid: options.grid || {}
        }
        return chartOptions
    },
    "updateSeries": (chart, updateData) => {
        chart.updateSeries(updateData)
    }
}
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

