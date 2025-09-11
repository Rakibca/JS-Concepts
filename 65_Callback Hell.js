/* 
Challenge:
1. Try to invoke these functions so they run in sequence. 
   The callback function passed to the final function (notifyUser) 
   can just be an anonymous function that logs 'All steps completed!'
   
   You will come up against a gotcha here! 
   See hint below!
*/

// Output below is expected:
// Step 1: Uploading file...
// Step 2: Processing file...
// Step 3: Notifying user...
// All steps completed!

////////////////////////
//// SEE HINT BELOW ////
////////////////////////

// Call the first function passing in the second function as a parameter.
// Pass the third function into the second function as a parameter.
// The third function should take in an anonymous function that logs "All steps completed!".
// To stop functions invoking immediately, pass them inside the bodies of anonymous functions. Arrow functions are great for this!

//////////////////////////
//// SEE ANSWER BELOW ////
//////////////////////////

// upload a file
function uploadFile(callback) {
  console.log('Step 1: Uploading file...');
  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}
// process a file
function processFile(callback) {
  console.log('Step 2: Processing file...');
  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}
// notify a user
function notifyUser(callback) {
  console.log('Step 3: Notifying user...');
  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}

uploadFile(() => {
  processFile(() => {
    notifyUser(() => {
      console.log('All steps completed!');
    });
  });
});
