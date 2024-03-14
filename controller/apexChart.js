import ApexCharts from "apexcharts";
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

export default apexChart;