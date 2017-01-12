//sort the students by name alphabetically
//if name === name then sort by age

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(students.sort(function(a, b){
  var name1 = a.name.toUpperCase();
  var name2 = b.name.toUpperCase();
  if (name1 < name2) {
    return -1;
  }
  if (name1 > name2) {
    return +1;
  }
    return 1;
}));




// function compareNumbers(a, b) {
//   return a - b;
// }

// function sortByName(array, index, name) {
//   console.log(students[index].name)
//}
// var sorted = students[0].name;
// console.log(students.sort(sortByName()));


 // console.log(students.sort());

