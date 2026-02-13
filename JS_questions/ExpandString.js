// input - ‘a12b2c4’
// output - ‘aaaaaaaaaaaabbcccc’

function expand(input) {
  let i = 0;
  let result = "";
  
  while (i < input.length) {
    let char = input[i];
    let num = "";
    i++;
    while (i < input.length && !isNaN(input[i])) {
      num += input[i];
      i++;
    }
    result += char.repeat(parseInt(num));
  }
  return result;
}

console.log(expand("a11b3c5d8"));
