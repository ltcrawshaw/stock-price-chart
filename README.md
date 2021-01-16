# stock-price-chart
A browser app that uses Node.js to read a .csv file and render the different closing prices of a stock on a chart.

This example uses Tesla, and fetches the current market price from Yahoo Finance API for reference.

Download the following dependancies:<br>
npm install -g browserify<br>
npm install brfs

Then run the following commands in your terminal:<br>
browserify main.js -o app.js<br>
browserify -t brfs main.js -o app.js


Chart made using chart.js 
https://www.chartjs.org/

