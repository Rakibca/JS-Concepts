const image = document.createElement('img');
image.src =
  'https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg';

// Create image constructor which is the recommended way
const image2 = new Image();
image2.src =
  'https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg';

console.log(image); //<img src='http://...'>
console.log(image2); //<img src='http://...'>

/*
Challenge:
1. Create two event listeners. One should listen 
   out for the image loading and log “Image has 
   loaded”. The other should listen for an error 
   and log “Image has NOT loaded”.
*/

//////////////////////////
//// SEE ANSWER BELOW ////
//////////////////////////

image.addEventListener('load', () => console.log('Image has loaded'));
image.addEventListener('error', () => console.log('Image has NOT loaded'));
