# stock-price-chart
A browser app that uses Node.js to read a .csv file and render the different closing prices of a stock on a chart.

Download the following dependancies:
npm install -g browserify
npm install brfs

Then run the following commands in your terminal:
browserify main.js -o app.js
browserify -t brfs main.js -o app.js

