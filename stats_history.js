export default {
    props: ["ownedCoins"],
    template: "#stats-history",
    data() {
        return {
            coinData: []
        }
    },
    methods: {
        getCoinData() {
            this.ownedCoins.forEach(c => {
                axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${c.symbol}&tsym=USD&limit=60&aggregate=1&e=CCCAGG`)
                    .then(response => {
                        let data = response.data.Data;
                        data.forEach(d => {
                            d.dt = fromUnix(d.time);
                            d.closeValue = d.close * c.amt_owned;
                            d.openValue = d.open * c.amt_owned;
                            d.highValue = d.high * c.amt_owned;
                            d.lowValue = d.low * c.amt_owned;
                        });
                        this.coinData.push(data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
        },
        createChart() {
            let dailyValues = [];
            this.coinData[0].forEach((c, i) => {
                dailyValues[i] = {
                    date: "",
                    open: 0,
                    close: 0,
                    high: 0,
                    low: 0,
                    start: 750
                }
            });
            this.coinData.forEach(coin => {
                coin.forEach((d, i) => {
                    if(dailyValues[i].date === "") { 
                        dailyValues[i].date = d.dt.toDateString().slice(4); 
                    }
                    dailyValues[i].open += d.openValue;
                    dailyValues[i].close += d.closeValue;
                    dailyValues[i].high += d.highValue;
                    dailyValues[i].low += d.lowValue;
                })
            });
            let oA = 0;
            let cA = 0;
            let hA = 0;
            let lA = 0;
            dailyValues.forEach(d => {
                oA += d.open;
                cA += d.close;
                hA += d.high;
                lA += d.low;
            });
            oA  = oA / dailyValues.length;
            cA = cA / dailyValues.length;
            lA = lA / dailyValues.length;
            hA = hA / dailyValues.length;
            dailyValues.forEach(d => {
                d.openAvg = oA;
                d.closeAvg = cA;
                d.lowAvg = lA;
                d.highAvg = hA;
            });
            let chartData = {
                labels: [],
                datasets: [
                    {
                        label: "Close Price",
                        data: [],
                        backgroundColor: "rgba(200, 200, 200, .5)",
                        borderColor: "rgba(50, 100, 200, .7)",
                        fill: false
                    },
                    {
                        label: "Open Price",
                        data: [],
                        backgroundColor: "rgba(200, 200, 200, .5)",
                        borderColor: "rgba(150, 100, 200, .7)",
                        fill: false
                    },
                    {
                        label: "High Price",
                        data: [],
                        backgroundColor: "rgba(200, 200, 200, .5)",
                        borderColor: "rgba(200, 50, 50, .9)",
                        fill: false
                    },
                    {
                        label: "Low Price",
                        data: [],
                        backgroundColor: "rgba(200, 200, 200, .5)",
                        borderColor: "rgba(200, 200, 50, .9)",
                        fill: false
                    },
                    {
                        label: "Initial Investment",
                        data: [],
                        backgroundColor: "rgba(255, 174, 0, .5)",
                        borderColor: "rgba(255, 174, 0, .9)",
                        fill: false,
                        pointRadius: 0
                    },
                    // {
                    //     label: "Close Avg",
                    //     data: [],
                    //     backgroundColor: "rgba(200, 200, 200, .5)",
                    //     borderColor: "rgba(50, 100, 200, .7)",
                    //     fill: false,
                    //     pointRadius: 0
                    // },
                    // {
                    //     label: "Open Avg",
                    //     data: [],
                    //     backgroundColor: "rgba(200, 200, 200, .5)",
                    //     borderColor: "rgba(150, 100, 200, .7)",
                    //     fill: false,
                    //     pointRadius: 0
                    // },
                    // {
                    //     label: "High Avg",
                    //     data: [],
                    //     backgroundColor: "rgba(200, 200, 200, .5)",
                    //     borderColor: "rgba(200, 50, 50, .9)",
                    //     fill: false,
                    //     pointRadius: 0
                    // },
                    // {
                    //     label: "Low Avg",
                    //     data: [],
                    //     backgroundColor: "rgba(200, 200, 200, .5)",
                    //     borderColor: "rgba(200, 200, 50, .9)",
                    //     fill: false,
                    //     pointRadius: 0
                    // },
                ]
            };
            dailyValues.forEach(d => {
                chartData.labels.push(d.date);
                chartData.datasets[0].data.push(d.close);
                chartData.datasets[1].data.push(d.open);
                chartData.datasets[2].data.push(d.high);
                chartData.datasets[3].data.push(d.low);
                chartData.datasets[4].data.push(d.start);
                // chartData.datasets[5].data.push(d.closeAvg);
                // chartData.datasets[6].data.push(d.openAvg);
                // chartData.datasets[7].data.push(d.highAvg);
                // chartData.datasets[8].data.push(d.lowAvg);
            });
            let testChart = new Chart(document.getElementById("stats-history-chart"), {
                type: "line",
                data: chartData,
                options: {
                    title: {
                        display: true,
                        text: `Accumulated Worth - ${chartData.labels[0]} - ${chartData.labels[chartData.labels.length - 1]}`,
                        fontSize: 24
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                max: 1200,
                                stepSize: 100
                            }
                        }]
                    }
                }
            });
        }
    },
    watch: {
        ownedCoins: "getCoinData",
        coinData: "createChart"
    }
}

function fromUnix(t) {
    t = new Date(t * 1000);
    return t;
}