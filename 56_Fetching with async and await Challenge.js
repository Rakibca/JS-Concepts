/*
Challenge:
    1. Make a fetch request to the "Bored" API: 
         Base URL: https://apis.scrimba.com/bored/api
         Endpoint: /activity
    2. Log an object containing an activity suggestion 
       to the console.
    ⚠️ Make sure you use the async/await method!
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// SEE BELOW HINT:
///////////////////////////////////////////////////////////////////////////////////////////////
// Fetch the full url and store what you get back to a const called "response".
// Set up a const "data" and store what you get from converting your "response" to a JS object.
// If you get unexpected errors, check index.html to see if you are working in a module or not.
// Also make sure you are using the "async" and "await" keywords in the right places!
///////////////////////////////////////////////////////////////////////////////////////////////

async function getSuggestion() {
  const response = await fetch('https://apis.scrimba.com/bored/api/activity');
  const data = await response.json();
  console.log(data);
  //{activity: 'Take your cat on a walk', type: 'relaxation', participants: 1, price: 0.02, link: '', key: '5940465', accessibility: 0.1}
}
getSuggestion();

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

async function getSuggestion() {
  const response = fetch('https://apis.scrimba.com/bored/api/activity');
  console.log(response);
  // Promise {}
}
getSuggestion();
