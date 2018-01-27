export default {
    props: ["symbol", "coinName"],
    template: "#history",
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    updated() {
        axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${this.symbol}&tsym=USD&limit=60&aggregate=1&e=CCCAGG`)
            .then((response) => {
                let data = response.data.Data;
                data.forEach(d => {
                    d.dt = fromUnix(d.time);
                });
                let sample = data.slice(data.length - 30, data.length);
                let chartData = {
                    labels: [],
                    datasets: [{
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
                    }]
                };
                data.forEach(s => {
                    chartData.labels.push(s.dt.toDateString().slice(4));
                    chartData.datasets[0].data.push(s.close);
                    chartData.datasets[1].data.push(s.open);
                    chartData.datasets[2].data.push(s.high);
                    chartData.datasets[3].data.push(s.low);
                });
                let testChart = new Chart(document.getElementById(this.symbol), {
                    type: "line",
                    data: chartData,
                    options: {
                        title: {
                            display: true,
                            text: `${this.coinName} - ${chartData.labels[0]} - ${chartData.labels[chartData.labels.length-1]}`,
                            fontSize: 24
                        }
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

function fromUnix(t) {
    t = new Date(t * 1000);
    return t;
}