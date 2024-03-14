let chartJs = {
    "container": document.querySelector("#chartJs"),
    "init": (args) => {
        let container = args.container || chartJs.container;
        let options = chartJs.checkChartOptions(args);
        let chart = new Chart(container, options);
        return chart;
    },
    checkChartOptions: (option) => {
        return {
            type: option.type,
            data: {
                datasets: option.datasets
            },
            options: option.options || {}
        }
    }
}