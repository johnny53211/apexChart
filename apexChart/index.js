'use strict';
let dateChart;
let barChart, areaChart, radarChart, funnelChart, rangeBarChart, boxPlotChart
$(document).ready(async function () {
    let jsondata;
    let args = {
        url: `${baseUrl}/getChartJson`,
        method: 'get',
    }
    let chartResponse = await utils.callApi(args);
    if (chartResponse && Object.keys(chartResponse.data).length) {
        jsondata = chartResponse.data;
        utils.chartData = utils.modifyData(jsondata['deviceChart'], { x: 'date', y: 'working' })
        // pie chart end
        var options = {
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
                curve: 'smooth',
            },
            height: "500px",
            container: document.querySelector("#dateChart"),
        }
        // data chart
        dateChart = apexChart.init(options);
        dateChart.render(); // render data chart

        // setInterval(() => {
        //     chartData = utils.updateData(chartData, { x: 'x', y: 'y' });
        //     apexChart.updateSeries(dateChart, chartData)
        // }, 5000);

        // // bar chart options  start
        let barChartOptions = {
            series: utils.chartData,
            type: 'bar',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                },
            },
            xAxis: {
                type: 'category',
                categories: [],
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
            height: "500px",
            container: document.querySelector('#barChart')
        }
        barChart = apexChart.init(barChartOptions);
        barChart.render();

        // area chart
        let areaChartOptions = {
            series: utils.chartData,
            type: 'area',
            xAxis: {
                type: 'category',
                categories: [],
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
            height: "500px",
            container: document.querySelector('#areaChart')
        }
        areaChart = apexChart.init(areaChartOptions);
        areaChart.render();

        let radarChartOptions = {
            series: utils.chartData,
            type: 'radar',
            height: "500px",
            container: document.querySelector('#radarChart')
        }
        radarChart = apexChart.init(radarChartOptions);
        radarChart.render()


        // funnel type bar chart
        let funnelChartOptions = {
            series: utils.chartData,
            type: 'bar',
            // plotOptions: {
            //     bar: {
            //         borderRadius: 0,
            //         horizontal: true,
            //         barHeight: '80%',
            //         isFunnel: true,
            //     },
            // }, // funnel type
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                    distributed: true,
                    barHeight: '80%',
                    isFunnel: true,
                },
            },// pyramid type
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                },
            },
            xAxis: {
                type: 'category',
                categories: [],
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
            height: "500px",
            container: document.querySelector('#funelChart')
        }
        funnelChart = apexChart.init(funnelChartOptions);
        funnelChart.render()

        // rangeBarChart

        let rangeBarChartOptions = {
            series: utils.chartData,
            type: 'rangeBar',
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                },
            },
            xAxis: {
                type: 'category',
                categories: [],
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
            height: "500px",
            container: document.querySelector('#rangeBarChart')
        }
        // rangeBarChart = apexChart.init(rangeBarChartOptions);
        // rangeBarChart.render()

        // box plot chart

        let boxPlotChartOptions = {
            series: utils.chartData,
            type: 'treemap',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                },
            },
            xAxis: {
                type: 'category',
                categories: [],
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
            height: "500px",
            container: document.querySelector('#boxPlotChart')
        }
        boxPlotChart = apexChart.init(boxPlotChartOptions);
        boxPlotChart.render()
        // window.setInterval(() => {
        //     apexChart.updateSeries(barChart, utils.chartData)
        // }, 1000);
        await initMqtt()
    }

    // //  bar chart ended 

    // area chart


    // chart js 

    // let args = {
    //     type: 'bar',
    //     container: document.getElementById('myChart'),
    //     datasets: chartData,
    //     options: {
    //         animation: true
    //     }
    // }
    // chartJs.init(args);

    // // line chart 
    // args.type = 'line',
    //     args.container = document.getElementById('lineChartchartJs');
    // chartJs.init(args)

    // args.type = 'polarArea',
    //     args.container = document.querySelector('#radarChartchartJs');
    // chartJs.init(args)

})

async function initMqtt() {
    await mqttModule.init();
    setTimeout(() => {
        mqttModule.subscribe('chart/update')

    }, 1000);
}


