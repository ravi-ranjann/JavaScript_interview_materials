// Currying transforms a function into a sequence of functions each
// taking a single argument of the function.
function discount(discount) {
    return (price) => {
        return price * discount;
    }
}

const tenPercentDiscount = discount(0.1);

tenPercentDiscount(500); // 50

const twentyPercentDiscount = discount(0.2);

twentyPercentDiscount(500); // 100


// Infinite Currying
function sum (...args) { 
    let s = args.reduce((a,b)=>a+b) ;
    return function (...x) { 
        return x.length == 0 ? s : sum(s, ...x) 
    }; 
}
    
    
console.log(sum(1,2)(2,3,4)(2)());   // 14
    

// Example 3

function multiply(a) {
    return (b) => b === undefined ? a : multiply(a * b);
}
  
  
console.log(multiply(1)(2)(3)(4)());