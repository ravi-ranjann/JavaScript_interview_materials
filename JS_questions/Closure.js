/*
  CLOSURE DEFINITION:
  A closure is a function that has access to variables from another function's scope.
  It's created every time a function is created. It has access to:
  1. Its own scope (variables defined inside the function)
  2. Outer function's scope (variables of the parent function)
  3. Global scope (global variables)
  
  PRACTICAL USES:
  - Data encapsulation & privacy (hide internal state)
  - Function factories (create customized functions)
  - Event handlers with state
  - Module pattern
  - Callbacks with context
*/

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
  