const promise1 = Promise.resolve("Hello");
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "World");
});
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: ['Hello', 42, 'World']
  })
  .catch((error) => {
    console.error(error);
  });
