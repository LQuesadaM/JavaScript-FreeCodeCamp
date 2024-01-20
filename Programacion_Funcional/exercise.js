/* Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema complejo
Ahora que has superado algunos desafíos usando funciones de orden superior como map(), filter(), y reduce(), ahora puedes aplicarlos para resolver un desafío más complejo.

Completa el código para la función squareList usando cualquier combinación de map(), filter(), y reduce(). La función debe devolver un nuevo arreglo que contenga los cuadrados de solamente los enteros positivos (números decimales no son enteros) cuando se le pasa un arreglo de números reales. Un ejemplo de un arreglo que contiene números reales es [-3, 4.8, 5, 3, -3.2].

Nota: Tu función no debe usar ningún tipo de bucle for o while o la función forEach(). */

/* 
Pruebas
Condition: squareList debe ser una función (function).
Condition: for, while, y forEach no deben ser usados.
Condition: map, filter, o reduce deben ser usados.
Condition: La función debe devolver un arreglo (array).
Condition: squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) debe devolver [16, 1764, 36].
Condition: squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) debe devolver [9, 100, 49]. 
*/

const squareList = arr => {
    // Cambia solo el código debajo de esta línea
    let newArrFilterSquare = arr
      .filter((integer) => integer > 0 && Number.isInteger(integer))
      .map((square) => square * square)
    

     return newArrFilterSquare
    // Cambia solo el código encima de esta línea
  };
  
  const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
  console.log(squaredIntegers);