// 'g' is the 'global' flag
const paragraph =
  'javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring';
console.log(
  paragraph.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function (match) {
    return match.toUpperCase();
  })
);
// JavaScript is the backbone of the internet. It was created in 1995. Before JS, websites were so boring

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 'i' is the 'case insensitive' flag
const text = 'Please switch off the WIFI before you leave.';
const regex = /wifi/gi;
const doesMatch = regex.test(text);
console.log(doesMatch); // returns boolean 'true'

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The RegExp Constructor
const text2 = 'Please switch off the WIFI before you leave.';
const userInput = 'wifi';
const regex2 = new RegExp(userInput, 'gi');
const doesMatch2 = regex2.test(text2);
console.log(doesMatch2); // returns boolean 'true'
