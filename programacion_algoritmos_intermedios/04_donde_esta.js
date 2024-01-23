/*                      Donde estás
* Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección si se va a incluir en el arreglo devuelto.

* Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], y el segundo argumento es { last: "Capulet" }, entonces debes devolver el tercer objeto del arreglo (el primer argumento), porque contiene el nombre y su valor, el cual fue pasado como segundo argumento. */


function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source)
    const newObj = collection.filter((obj) => sourceKeys.every(key => obj[key] === source[key]))
    
    return newObj
}

    


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
                            { first: "Mercutio", last: null }, 
                            { first: "Tybalt", last: "Capulet" }], 
                            { last: "Capulet" }));

console.log(whatIsInAName([{ "apple": 1 }, 
                           { "apple": 1 }, 
                           { "apple": 1, "bat": 2 }], 
                           { "apple": 1 }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, 
                           { "bat": 2 }, 
                           { "apple": 1, "bat": 2, "cookie": 2 }], 
                           { "apple": 1, "bat": 2 }));