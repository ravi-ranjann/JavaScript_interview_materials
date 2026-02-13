async function fetchData() {
  try {
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve("Async/Await is awesome!"), 2000);
    });
    console.log(result); // Output: Async/Await is awesome!
  } catch (error) {
    console.error(error);
  }
}
fetchData();
