let prompt = require("prompt-sync")();

// Program to check if two words are anagrams

// Function to get user input and validate it
function getUserInput() {
    const words = [];
    console.log("Enter two words");

    while (words.length < 2) {
        const input = prompt("> ").trim().toLowerCase();

        if (input === "" || input.includes(" ")) {
            console.log("You must enter a valid word");
            continue;
        }

        if (/[0-9]/.test(input)) {
            console.log("Words cannot contain numbers");
            continue;
        }

        words.push(input);
    }
    return words;
}

// Function to normalize a word by sorting its letters
function normalizeWord(word) {
    return word.split("").sort().join("");
}

// Function to check if two words are anagrams
function anagramChecker([word1, word2]) {
    return normalizeWord(word1) === normalizeWord(word2);
}

const userWords = getUserInput();
const isAnagram = anagramChecker(userWords);

console.log(`The words "${userWords.join('" and "')}": ${isAnagram ? "ARE" : "are NOT"} anagrams.`);