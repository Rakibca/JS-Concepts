function createPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve('Operation successful!');
    } else {
      reject('Operation failed.');
    }
  });
}

// Output from 'Promise.all' is an array of resolved promises
try {
  const promise1 = createPromise();
  const promise2 = createPromise();
  const promise3 = createPromise();
  const result = await Promise.all([promise1, promise2, promise3]);
  console.log(result); // ['Operation successful!', 'Operation successful!', 'Operation successful!']
} catch (err) {
  console.log(err); // or we may get 'Operation failed.'
}
