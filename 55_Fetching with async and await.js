// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data))

//////////////////////////////////////////
// SEE BELOW CODE USING ASYNC and AWAIT //
//////////////////////////////////////////
const response = await fetch(
  'https://apis.scrimba.com/dog.ceo/api/breeds/image/random'
);
const data = await response.json();

const imageElement = document.createElement('img');
imageElement.src = data.message;
imageElement.alt = 'random dog picture';
document.getElementById('img-container').appendChild(imageElement);

console.log(data);

// If type="module" is removed from index.html, we get the error below:
// SyntaxError: await is only valid in async functions and the top level bodies of modules //
////////////////////////////
// USE BELOW CODE INSTEAD //
////////////////////////////
async function getDogImage() {
  const response = await fetch(
    'https://apis.scrimba.com/dog.ceo/api/breeds/image/random'
  );
  const data = await response.json();
  const imageElement = document.createElement('img');
  imageElement.src = data.message;
  imageElement.alt = 'random dog picture';
  document.getElementById('img-container').appendChild(imageElement);
  console.log(data);
}

getDogImage();
