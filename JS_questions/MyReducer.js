// Custom reduce function
Array.prototype.myReduce = function (callback, initialValue) {
  // Check if the array is empty and no initial value is provided
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  // Initialize accumulator with the initial value or the first element of the array;
  let accumulator = initialValue !== undefined ? initialValue : this[0];

  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Sum all elements using the custom reduce function
const sum = numbers.myReduce(
  (accumulator, current) => accumulator + current,
  0
);

console.log(sum); // Output: 15
