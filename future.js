//allow user input
const prompt = require('prompt-sync')({sigint: true});


// ### Predict death age ###

//get user age
const age = prompt('Enter your age');


const min = Math.ceil(Number(age));
const max = Math.floor(110);

//generate random death age
const deathAge = Math.floor(Math.random() * (max - min) + min);

console.log(`You will die at ${deathAge} years old.`);

// ###########################



// ### Predict wealth ###

//predict kids
//array to hold positive words
const positiveWords = [''];

const negativeWords = [];