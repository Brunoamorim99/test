const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Set the answer and the maximum number of guesses allowed
const answer = Math.floor(Math.random() * 100); // Random number between 0-99
const maxGuessesAllowed = 5;
let guessesMade = 0;

function GuessingGame(answer, guess) {
  guessesMade++;

  if (guessesMade > maxGuessesAllowed) {
    console.log("You lose!");
    readline.close();
    return;
  }

  if (guess === answer) {
    console.log("You win!");
    readline.close();
    return;
  } else if (guess > answer) {
    console.log("Too Big!");
  } else {
    console.log("Too Small!");
  }

  // Check proximity
  const difference = Math.abs(answer - guess);
  if (difference <= 5) {
    console.log("Almost there!");
  } else if (difference <= 10) {
    console.log("Close!");
  }
}

function StartGame() {
  readline.question("Enter your guess (or type 'quit' to exit): ", (input) => {
    if (input.toLowerCase() === "quit") {
      readline.close();
      return;
    }

    const guess = parseInt(input, 10);

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
      StartGame();
      return;
    }

    GuessingGame(answer, guess);
    StartGame();
  });
}

console.log("Welcome to the Number Guessing Game!");
console.log("I have selected a number between 0 and 99. You have 5 guesses to find it.");
StartGame();