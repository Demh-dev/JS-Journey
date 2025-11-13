let prompt = require("prompt-sync")();

//Program that returns a new array with no repeated numbers

//Function to get 5 user-entered numbers
function getUserInput() {
    const numbersArray = [];
    console.log("Enter 5 numbers: ");

    while (numbersArray.length < 5) {
        const userNumber = Number(prompt("> "));

        if (isNaN(userNumber)) {
            console.log("Please enter a valid number.");
            continue;
        }

        numbersArray.push(userNumber);
    };
    return numbersArray;
}

//Function to find and return a new array with no repeated numbers
function findRepeatedNumbers(userInput) {
    return userInput.reduce((newArray, number) => {
        newArray.includes(number) ? null : newArray.push(number);
        return newArray;
    }, []);
}

const userInput = getUserInput();
const uniqueNumbers = findRepeatedNumbers(userInput);

console.log(`This is the new array of numbers: ${uniqueNumbers.join(", ")}`);