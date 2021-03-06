$(function() {
    var chart;

    livePrice();
    initChart();
    setTimeout(() => {
        setStockDataIntoChart();
    }, 5000)

    function livePrice() {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=TSLA&region=US",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "0aa2705dbemsh96a7aba4d8b3c7ep1aaed2jsn6dc95dea39ac",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        };

        $.ajax(settings).done( (response) => {
            $('.current-price').text(`Tesla's current price is: $${response.price.regularMarketPrice.raw} USD`);
        });
    }

    function initChart() {
        let ctx = document.getElementById("chart");
        chart = new Chart(ctx, {
            type: "line",
            data: {
                datasets: [
                    {
                        label: "",
                        data: [],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [
                        {
                            type: "time"
                        }
                    ]
                }
            }
        });
    }

    function setStockDataIntoChart() {
        let points = [];

        for(let i = 1; i < stockdata.length; i++) {
            let date = new Date(stockdata[i].date).getTime();
            let price = parseFloat(stockdata[i].price);

            points.push(
                {
                    x: date,
                    y: price
                });
        }

        chart.data.datasets[0].data = points;
        chart.update();
    }

});
