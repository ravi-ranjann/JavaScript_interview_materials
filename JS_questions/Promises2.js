const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "Hello, Promises!";
    // Simulate a successful operation
    resolve(data);
    // Simulate an error
    // reject('Error fetching data');
  }, 2000);
});
// Using the Promise
fetchData
  .then((result) => {
    console.log(result); // Output: Hello, Promises!
  })
  .catch((error) => {
    console.error(error); // Output: Error fetching data
  });
