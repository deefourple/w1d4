var loadedDie = (function() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5]
  var index = 0;
      return function () {
      index++;
      return list[index - 1];
    }
})();


console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());