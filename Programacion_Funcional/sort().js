/* function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  
  ascendingOrder([1, 5, 2, 3, 4]); */




/* 
function alphabeticalOrder(arr) {
    // Cambia solo el código debajo de esta línea
    arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1)
    console.log(arr); 
    // Cambia solo el código encima de esta línea
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); */


  const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
  return [...arr].sort((a,b ) => a - b)

  // Cambia solo el código encima de esta línea
}

console.log(nonMutatingSort(globalArray));

console.log(globalArray)