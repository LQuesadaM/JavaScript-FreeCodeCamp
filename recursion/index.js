function conteoRegresivo(param) {
    if(param < 0) {
        return
    } else {
        console.log(param)
        return conteoRegresivo(a - 1)
    }
}

conteoRegresivo(10)


/*
* 
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

*/






/* 
Escribe una función recursiva, sum(arr, n), que devuelve la suma de los primeros elementos n de un arreglo arr. 

Tu código no debe depender de ningún tipo de bluces (for o while) o funciones de orden alto tales como forEach, map, filter, o reduce.).
*/

/*
function sum(arr, n) {
    
}


sum([1], 0) // debe ser igual a 0.
sum([2, 3, 4], 1) // debe ser igual a 2.
sum([2, 3, 4, 5], 3) // debe ser igual a 9.

*/