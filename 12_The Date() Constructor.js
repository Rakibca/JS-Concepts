const dateSnapshot = new Date();
console.log(dateSnapshot);
console.log(typeof dateSnapshot);
console.log(dateSnapshot.toString());

/*
Challenge:
    1. Search online to find out how we can get just the year
       using the Date() constructor. Then update the code in 
       the console.log.
*/

console.log(
  `Copyright ${dateSnapshot.getFullYear().toString()} All Rights Reserved.`
);

// Also check out this commonly used package called Luxon.
// https://www.npmjs.com/package/luxon
