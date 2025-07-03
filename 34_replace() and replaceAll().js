const paragraph =
  'js is the backbone of the internet. It was created in 1995. Before js, websites were so boring.';

console.log(paragraph.replace('js', 'JS'));
//JS is the backbone of the internet. It was created in 1995. Before js, websites were so boring.

console.log(paragraph.replaceAll('js', 'JS'));
//JS is the backbone of the internet. It was created in 1995. Before JS, websites were so boring.

//////////////////////////////////////////////////////////////////////

/*
Challenge:
    1. Change the lowercase i’s to uppercase.
*/
const sentence = 'i went to Australia and i saw a shark';
console.log(sentence.replaceAll('i', 'I'));
//I went to AustralIa and I saw a shark
//Word 'AustralIa' has I is capital.

//Use regex instead
console.log(sentence.replaceAll(/\b(i)\b/g, 'I'));
//I went to Australia and I saw a shark

//////////////////////////////////////////////////////////////////////

const sentence2 = 'I love you with all my heart!';
console.log(
  sentence2.replaceAll(/\b(love|heart)\b/g, function () {
    return `💜`;
  })
);

//////////////////////////////////////////////////////////////////////

/*
Challenge:
    1. Use replaceAll and regex to ensure the first 
       character of each sentence is uppercase.
       You will need to use a string method which converts 
       characters to uppercase.
*/

//Use the regex shown in regex.md file
const paragraph2 =
  'javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring';

console.log(
  paragraph2.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function (match) {
    return match.toUpperCase();
  })
);
//JavaScript is the backbone of the internet. It was created in 1995. Before JS, websites were so boring
