let data = require('./data');
let stockdata = data.readStockData();

console.table(stockdata);

window.stockdata = stockdata
