/*
Write a program, main.js, that randomly picks a number between 1 and 100.
Give the user three chances to guess it. If they get it right, tell them so.
If their guess is off, tell them in which direction they need to guess. And let them guess up to three times. If they get it correct before the third guess, don't ask them additional questions!
*/

const prompt = require("prompt-sync")({sigint: true});

let answer = Math.ceil(Math.random() * 100);
console.log(answer)
let guess = Number(prompt("Pick a number between 1 and 100: "));
let count = 0;

while (guess !== answer && count < 2){
    count++
    if (guess < answer){
        console.log("Too Low. Pick a higher number.");
        guess = Number(prompt("> "));
    } else if (guess > answer){
        console.log("Too High. Pick a lower number.");
        guess = Number(prompt("> "));
    }
}
if (count === 2){
    console.log("Sorry, you're all out of guesses. The number was: " + answer);
}
if (guess === answer){
    console.log("You got it! " + answer + " was the number.")
}


