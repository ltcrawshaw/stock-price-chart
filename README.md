# tesla-stock-chart-and-track
A browser app that uses Node.js to read a .csv file and renders the different closing prices of Tesla's stock in 2020 to a chart. It also uses yahoo finance API to fetch the live tesla price for comparison. 

Download the following dependancies:<br>
npm install -g browserify<br>
npm install brfs

Then run the following commands in your terminal:<br>
browserify main.js -o app.js<br>
browserify -t brfs main.js -o app.js

