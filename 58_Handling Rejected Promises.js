/*
We get an error, for example if we change 'apis' to 'api'
We can catch this error using .catch
*/
fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
    // update the DOM to warn the user
    // access an alternative API
  })
  .finally(() => console.log('The operation completed.'));

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

/*
Challenge:
1. Convert the above code to use async/await, handle errors with “try/catch” blocks, and add a “finally” block.

*/
try {
  const response = await fetch(
    'https://apis.scrimba.com/dog.ceo/api/breeds/image/random'
  );
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.log(err);
  // update the DOM to warn the user
  // access an alternative API
  throw new Error('This is a network error!');
} finally {
  console.log('The operation completed.');
}
