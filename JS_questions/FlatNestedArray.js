// flat nested array without using in-build function:
// Example: [1,[2,3,4,[4,5]]] to [1,2,3,4,5]

function flatten(input) {
  const stack = [...input];
  const res = [];

  while (stack.length) {
    const next = stack.pop();

    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }

  // reverse to restore input order
  return res.reverse();
}

console.log(flatten(arr));
