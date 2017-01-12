 var search = findWaldo(arr, found) {
  search.forEach(function() {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback})
    }
  }
}

function actionWhenFound(index) {
 console.log("Found Waldo at index " + index);
}

 findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);