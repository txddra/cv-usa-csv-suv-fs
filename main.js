//step four:
const getRows = require('./get-rows.js')

//step one:
const fs = require('fs');
//step two:?
const userInput1 = process.argv[2];
const userInput2 = process.argv[3];
//step three:
const file = fs.readFileSync('./owid-covid-usa-data.csv',  'utf8' );

