const words = ["ground", "control", "to", "major", "tom"];

const map = function(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
  arr.push(array[i].length);
  }
  return arr;
}
console.log(map(words));