/* 
        Diferencia entre dos arreglos
Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

! **Nota:** Puedes devolver el arreglo con sus elementos en cualquier orden. 
*/


function diffArray(arr1, arr2) {
    const newArr = [...arr1, ...arr2];
    const filterArray = newArr.filter( x => arr1.indexOf(x) === -1 || arr2.indexOf(x) === -1)
    return filterArray
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])