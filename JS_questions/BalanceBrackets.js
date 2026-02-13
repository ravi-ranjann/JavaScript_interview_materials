const exp = "[()]{}{[()()]()}[[]]}";

function checkPair(exp) {
  const pair = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  
  const keys = Object.keys(pair);
  const stack = [];

  for (let i = 0; i < exp.length; i++) {
    const str = exp[i];
    if (keys.includes(str)) {
      stack.push(str);
    } else if (pair[stack.pop()] !== str) return false;
  }

  return stack.length === 0;
}

console.log(isPaired(exp));
