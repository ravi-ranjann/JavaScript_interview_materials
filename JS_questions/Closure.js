// Example 1
function outer() {
    let count = 0;  // This variable is in outer's scope
  
    function inner() {
      count++;  // inner accesses and modifies count
      console.log(count);
    }
  
    return inner;
  }
  
  const counter = outer();  // outer() runs, returns inner function
  
  counter();  // Output: 1
  counter();  // Output: 2
  counter();  // Output: 3

  
// Example 2
  function createCounter() {
    let count = 0;
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      }
    };
  }
  
  const myCounter = createCounter();
  console.log(myCounter.increment());  // 1
  console.log(myCounter.increment());  // 2
  console.log(myCounter.decrement());  // 1
  