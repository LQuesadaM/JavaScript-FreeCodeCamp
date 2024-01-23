/*                              Busca y destruye
* Se te proporcionará un arreglo inicial como primer argumento de la función destroyer, seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

* La function debe aceptar un número indeterminado de argumentos, también conocida como función variádica. Puedes acceder a los argumentos adicionales añadiendo un parámetro restante a la definición de la función o utilizando el objeto arguments. */


function destroyer(arr, ...theArgs) {
    const filterArray = arr.filter((element) => !theArgs.includes(element))
    console.log(filterArray)
  }
  


  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

  destroyer([3, 5, 1, 2, 2], 2, 3, 5);

  destroyer([2, 3, 2, 3], 2, 3);

  destroyer(["tree", "hamburger", 53], "tree", 53);

  destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");