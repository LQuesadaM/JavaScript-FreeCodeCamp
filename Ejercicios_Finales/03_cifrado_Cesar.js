/* 
*                   Cifrado César
Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos. */

function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decipher = ""

    for (let i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) >= 13) {
            decipher += alphabet[alphabet.indexOf(str[i]) - 13]
        } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1){
            decipher += alphabet[alphabet.indexOf(str[i]) + 13]
        } else {
            decipher += str[i]
        }
               
    }


    return decipher
  }
 

  console.log(rot13("SERR PBQR PNZC"));
  //console.log(rot13("SERR PBQR PNZC"));
  //console.log(rot13("SERR CVMMN!"));
  //console.log(rot13("SERR YBIR?"));
  //console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
