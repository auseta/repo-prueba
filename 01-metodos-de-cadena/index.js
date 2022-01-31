let cadena = "cadena de prueba"
let cadena2 = "prueba"

//! METODOS PARA BUSCAR Y DEVOLVER UN VALOR

//*concat() - junta dos o mas cadenas y retorna una nueva
// resultado = cadena.concat(cadena2)
// document.write(resultado)

//*startsWith() - si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false
// resultado = cadena.startsWith(cadena2) 
// document.write(resultado)

//*endsWith() - si una caden termina con los caracteres de otra cadena, devuelve true, sino devuelve false
// resultado = cadena.endsWith(cadena2);
// document.write(resultado)

//*includes() - si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false
// resultado = cadena.includes(cadena2)
// console.log(resultado);

//*indexOF() - devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
// resultado = cadena.indexOf("prueba");
// resultado2 = cadena.indexOf("rancio");
// console.log(resultado);
// console.log(resultado2); //no existe "rancio" en cadena, devuelve -1

//*lastIndexOf() - devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1.
// cadena = "cadena de prueba prueba prueba"
// let resultado = cadena.lastIndexOf("prueba");   //recorre la cadena de adelante para atras hasat que encuentra el primer caracter de la cadena ingresada
// console.log(resultado);

//!METODOS PARA RELLENAR CADENAS

//*padStart() [propuesta de Estandar] - Rellenar cadena al principio con los caracteres deseados
// cadena = "abc";
// resultado = cadena.padStart(10, "1") //rellena la cadena DESDE EL PRINCIPIO con "1" hasta que haya 10 caracteres
// console.log(resultado);

//*padEnd() [propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados.
// cadena = "abcdefghijh";
// resultado = cadena.padEnd(12, "123456")
// console.log(resultado);

//*repeat() - Devuelve la misma cadena pero repetida la cantidad de veces que le indiquemos.
// cadena = "123 "
// resultado = cadena.repeat(2)
// console.log(resultado);

//!METODOS PARA MODIFICAR CADENAS

