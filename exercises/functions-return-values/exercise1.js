let prompt = require("prompt-sync")();

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function getUserGuess() {
    let guess = Number(prompt("Guess a number between 1 and 10: "));
    while (isNaN(guess) || guess < 1 || guess > 10) {
        console.log("Invalid input. Please enter a number between 1 and 10.");
        guess = Number(prompt("Guess again: "));
    }
    return guess;
}

function showHint(userInput, randomNumber) {
    if (userInput < randomNumber) console.log("Too low!");
    else if (userInput > randomNumber) console.log("Too high!");
}

function checkGuess(randomNumber) {
    let userInput;
    do {
        userInput = getUserGuess();
        showHint(userInput, randomNumber);
    } while (userInput !== randomNumber);

    console.log(`Correct! The number was ${randomNumber}.`);
}

const randomNumber = generateRandomNumber();
checkGuess(randomNumber);