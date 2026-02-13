var arr = [7, 9, 2, 3, 4, 5, 5, 4, 1, 9];

Array.prototype.mymap = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
};

arr = arr.mymap((num, ind, arr) => {
  return num * 2;
});
