/* 
*            Suma todos los números en un rango
Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.

Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10. */


function sumAll(arr) {
    const newArray = [...arr]
    //let min = arr.reduce((a, b) => Math.min(a, b))
    let max = Math.max(...newArray)
    for (let value of newArray) {
        if (value < max - 1) {
            newArray.push(value + 1)
        }
    }
    const sumArr = newArray.reduce((acumulator, currentValue) => acumulator + currentValue)
    return sumArr
    
}
  
  sumAll([1, 4]);
  sumAll([4, 1]);
  sumAll([5, 10]);
  sumAll([10, 5]);


  /* const nuevoArray = [10, 25, 50, 100, 3, 5]
  const maxNumero = Math.max(...nuevoArray)
  console.log(maxNumero) */