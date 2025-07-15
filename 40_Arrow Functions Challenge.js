// function speedWarning(speed) {
//   return `You are going at ${speed} mph!`;
// }
// console.log(speedWarning(40));

/*
Challenge
1. Refactor above function to use an arrow function.
2. Make sure you write the least code possible.
*/

const speedWarning = (speed) => `You are going at ${speed} mph!`;
console.log(speedWarning(40));

///////////////////////////////////////////////////////////////////////////////

// const speedWarning2 = (speed) => `You are going at ${speed} mph!`;
// console.log(speedWarning2(30, 40));

/*
Challenge
1. Refactor above function so it only warns drivers 
   who are going over the speed limit.
2. The function now needs to take in two parameters. 
   The first is the speed limit, the second is the 
   driver's actual speed.
*/

const speedWarning2 = (speedLimit, speed) => {
  if (speed > speedLimit) {
    return `You are going at ${speed} mph!`;
  }
};
console.log(speedWarning2(30, 40));
