module.exports.readStockData = () => {
    let data = [];

    require('fs').readFileSync('./tesla.csv', 'ascii').split(/\r?\n/).forEach((line) => {
        let cols = line.split(',');
        let date = cols[0];
        let price = cols[1];

        data.push({date:date,price:price});
    });

    return data;

}