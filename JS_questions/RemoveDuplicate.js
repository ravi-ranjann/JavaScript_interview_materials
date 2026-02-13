var arr = [7, 9, 2,3,4,5,5,4, 1, 9];

let b = arr.filter((value, index) => arr.indexOf(value) == index );

console.log(b);