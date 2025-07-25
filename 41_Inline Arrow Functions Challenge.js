// const distanceTraveledMiles = [267, 345, 234, 190, 299];

// const distanceTraveledKm = distanceTraveledMiles.map(function (distance) {
//   return Math.round(distance * 1.6);
// });

// console.log(distanceTraveledKm);

/*
Challenge
1. Refactor the above .map method so the inline function is
   an arrow function. 
2. Write the least amount of code possible.
*/

const distanceTraveledMiles = [267, 345, 234, 190, 299];

const distanceTraveledKm = distanceTraveledMiles.map((distance) =>
  Math.round(distance * 1.6)
);

console.log(distanceTraveledKm);
