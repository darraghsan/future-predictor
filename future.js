//allow user input
const prompt = require('prompt-sync')({sigint: true});


// ### Predict death age ###

//get user age
const age = prompt('Enter your age: ');
const userAge = Number(age);
const min = Math.ceil(userAge);
const max = Math.floor(110);

//generate random death age
const deathAge = Math.floor(Math.random() * (max - min) + min);

console.log(`You will die at ${deathAge} years old.`);

// ###########################

// ### Predict wealth ###
const money = Math.floor(Math.random() * 200000000);
console.log(`You will be worth ${money} dollars at your death.`);

// ### Output positive or negative outcome ###
const negativeStart = ["Unfortunately", "Sorry, but", "I'm afraid to say,"];
const negativeEnd = ["shit.", "a bit crap.", "filled with misery."];

const positiveStart = ["Luckily", "Wow", "Fortunately"];
const positiveEnd = ["great!", "full of joy.", "brilliant!"];

const midSentence = "your life will be";

const mediocreStart = ["I suppose", "It could be better but", "It's not the best but"];
const mediocreEnd = ["ok.", "a bit meh.", "just average."];

if(deathAge > userAge + 30 && money > 650000){
    let randomPositiveStart = Math.floor(Math.random() * positiveStart.length);
    let randomPositiveEnd = Math.floor(Math.random() * positiveEnd.length);
    console.log(`${positiveStart[randomPositiveStart]} ${midSentence} ${positiveEnd[randomPositiveEnd]}`);
} else if(deathAge < userAge + 30 && money < 650000){
    let randomNegativeStart = Math.floor(Math.random() * negativeStart.length);
    let randomNegativeEnd = Math.floor(Math.random() * negativeEnd.length);
    console.log(`${negativeStart[randomNegativeStart]} ${midSentence} ${negativeEnd[randomNegativeEnd]}`);
} else {
    let randomMediocreStart = Math.floor(Math.random() * mediocreStart.length);
    let randomMediocreEnd = Math.floor(Math.random() * mediocreEnd.length);
    console.log(`${mediocreStart[randomMediocreStart]} ${midSentence} ${mediocreEnd[randomMediocreEnd]}`);
}
