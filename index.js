const playerGuess = 8;
const correctAnswer = 6;

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

// let message = "";
// if (playerGuess === correctAnswer) {
//   message = "Correct!";
// } else {
//   message = "Wrong!";
// }

// Answer:
// const message = playerGuess === correctAnswer ? "Correct!" : "Wrong!";
// console.log(message);

/*
Challenge
2. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/

// Answer:
const message =
  playerGuess < correctAnswer
    ? "Too low!"
    : playerGuess > correctAnswer
    ? "Too high"
    : "Exactly right!";

console.log(message);
