/*              Spinal case
* Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones. */

function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
    return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
  }
  
  

  console.log(spinalCase('This Is Spinal Tap'))
  console.log(spinalCase("thisIsSpinalTap"))
  console.log(spinalCase("The_Andy_Griffith_Show"))
  console.log(spinalCase("Teletubbies say Eh-oh"))
  console.log(spinalCase("AllThe-small Things"))
  