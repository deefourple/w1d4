
function FindWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);   // execute callback})
    }
  })
}

function actionWhenFound(index) {
 console.log("Found Waldo at index " + index);
}

FindWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);