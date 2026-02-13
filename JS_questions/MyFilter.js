var arr = [7, 9, 2, 3, 4, 5, 5, 4, 1, 9];

Array.prototype.myfilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};
