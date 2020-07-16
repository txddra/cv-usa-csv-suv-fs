//step four:
const getRows = require('./get-rows.js')
 
//step seven:
const getTotalCasesByDay= require('./get-total-cases-by-day.js')

//step nine :
const getNewCasesByDay = require('./get-new-cases-by-day.js')
//step one:
const fs = require('fs');
//step two:?
const userInput1 = process.argv[2];
const userInput2 = process.argv[3];

//step three:
const file = fs.readFileSync('./owid-covid-usa-data.csv',  'utf8' );

//step five:
const gotRows = getRows(file)

//step six:
 if(userInput1 === 'total'){

console.log(getTotalCasesByDay(userInput2,gotRows))
 }

 //step eight:
 if(userInput1 === 'new'){
     console.log(getNewCasesByDay(userInput2, gotRows))
 }
if(userInput1 !== 'total'|| userInput1 !== 'new'){
    console.log("please input the following keywords before continuing your search: [new] or [total] then secondly input a date")
}