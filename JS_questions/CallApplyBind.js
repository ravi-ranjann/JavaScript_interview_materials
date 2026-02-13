/*
  CALL, APPLY, BIND - Methods to control 'this' context

  1. CALL():
     - Invokes the function immediately
     - Syntax: function.call(thisArg, arg1, arg2, ...)
     - Arguments passed individually
     - Returns the result of the function call
     - Use when you know the number of arguments

  2. APPLY():
     - Invokes the function immediately
     - Syntax: function.apply(thisArg, [arg1, arg2, ...])
     - Arguments passed as an array
     - Returns the result of the function call
     - Use when arguments are in an array or variable

  3. BIND():
     - Does NOT invoke the function, returns a new function with bound context
     - Syntax: function.bind(thisArg, arg1, arg2, ...)
     - Can partially apply arguments (currying)
     - Returns a function that can be called later
     - Use when you need to pass function as callback

  PRACTICAL USES:
  - Method borrowing (use methods from other objects)
  - Setting context for callbacks
  - Function currying with bind
  - Array methods with different context
  - Partial function application
*/

//==================== EXAMPLES ====================

const name = {
  firstName: "Ravi",
  lastName: "Ranjan",
};

const printName = function (city, state) {
  console.log(this.firstName + " " + this.lastName);
  console.log("FROM " + city + "," + state);
};

printName.call(name, "Patna", "Bihar");

printName.apply(name, ["Bangalore", "Karnataka"]);

const name2 = printName.bind(name, "Delhi", "India");

name2();
//==================== ADDITIONAL PRACTICAL EXAMPLES ====================

// Example: Method Borrowing (use array methods on array-like objects)
const person = {
  firstName: "John",
  hobbies: ["reading", "gaming"],
};

const anotherPerson = {
  firstName: "Jane",
  hobbies: ["coding", "music"],
};

// Borrow the greet method
function greetWithHobbies() {
  console.log(`${this.firstName} likes: ${this.hobbies.join(", ")}`);
}

greetWithHobbies.call(person);        // John likes: reading, gaming
greetWithHobbies.apply(anotherPerson); // Jane likes: coding, music

// Example: Currying with bind
function multiply(a, b, c) {
  return a * b * c;
}

const multiplyBy2 = multiply.bind(null, 2);
const multiplyBy2And3 = multiplyBy2.bind(null, 3);

console.log(multiplyBy2(3, 4));           // 24 (2 * 3 * 4)
console.log(multiplyBy2And3(4));          // 24 (2 * 3 * 4)

// Example: Using bind with callbacks
const user = {
  id: 1,
  name: "Alice",
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

// Without bind - loses context
setTimeout(user.greet, 1000); // logs "Hello, I'm undefined"

// With bind - preserves context
setTimeout(user.greet.bind(user), 1000); // logs "Hello, I'm Alice"

// Example: Finding max/min from array using apply
const numbers = [5, 10, 3, 20, 1];
console.log(Math.max.apply(null, numbers));  // 20
console.log(Math.min.apply(null, numbers));  // 1