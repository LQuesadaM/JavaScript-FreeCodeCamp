/*
*                            Conversor de números romanos
Convierte el número proporcionado en un número romano.

                    Números romanos	Números arábigos
                            M-------1000
                            CM------900
                            D-------500
                            CD------400
                            C-------100
                            XC------90
                            L-------50
                            XL------40
                            X-------10
                            IX------9
                            V-------5
                            IV------4
                            I-------1
Todas las respuestas de los números romanos deben ser proporcionadas en mayúsculas.

 */

function convertToRoman(num) {
    // Verifica si el número está fuera del rango permitido
    if (num > 3999 || num < 0) {
        return "change the number 1 - 3999"
    }

    
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let result = ""

    
    values.forEach((value, index) =>{
        while (num >= value) {
            result += romans[index]
            num -= value
        }
    })
    
    return result
}
   
   console.log(convertToRoman(24));
   console.log(convertToRoman(2));
   console.log(convertToRoman(3));
   console.log(convertToRoman(4));
   console.log(convertToRoman(5));
   console.log(convertToRoman(9));
   console.log(convertToRoman(12));
   console.log(convertToRoman(16));
   console.log(convertToRoman(29));
   console.log(convertToRoman(44));
   console.log(convertToRoman(45));
   console.log(convertToRoman(68));
   console.log(convertToRoman(83));
   console.log(convertToRoman(97));
   console.log(convertToRoman(99));
   console.log(convertToRoman(400));
   console.log(convertToRoman(500));
   console.log(convertToRoman(501));
   console.log(convertToRoman(649));
   console.log(convertToRoman(798));
   console.log(convertToRoman(891));
   console.log(convertToRoman(1000));
   console.log(convertToRoman(1004));
   console.log(convertToRoman(1006));
   console.log(convertToRoman(1023));
   console.log(convertToRoman(2014));
   console.log(convertToRoman(3999));
   
    