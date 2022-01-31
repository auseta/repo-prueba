//*split() - Divide la cadena como le digamos
// let cadena = "Hola,como,estas";
// let resultado = cadena.split(",");

// document.write(resultado[0] + '<br>') //divide las palabras por comas (como le indicamos) y transforma todo en un array; ejemplo ['Hola', 'como', 'estas']
// document.write(resultado[1] + '<br>')
// document.write(resultado[2] + '<br>')
// console.log(resultado);


//*substring() - Nos retorna un pedazo de la cadena que seleccionamos
// let cadena = "ABCDEFG";
// let resultado = cadena.substring(0,2); //(donde empieza, donde termina); esto devuelve AB

// document.write(resultado)

//*toLowerCase() - Convierte una cadena a minuscula
// let cadena = "AYUDANOS SPIDERMAN!";
// let resultado = cadena.toLowerCase();

// document.write(resultado);

//*toUpperCase() - Convierte una cadena a mayuscula
// let cadena = "ayudanos spiderman!";
// let resultado = cadena.toUpperCase();

// document.write(resultado);

//*toString() - Convierte un dato (que no sa string) a string!
// let cadena = ["Augusto", "Lucas"];
// resultado = cadena.toString()

// document.write(resultado[0])

//*trim() - Remueve todos los espacios en blanco existentes en una cadena
// let cadena = "    pedro    "
// resultado = cadena.trim()
// document.write(resultado.length)

// //*trimEnd() - Elimina los espacios a la derecha de la cadena
// let cadena = "    pedro    "
// resultado = cadena.trimEnd()
// document.write(resultado.length)

//*trimStart() - Elimina los espacios a la izquierda de la cadena
let cadena = "    pedro    "
resultado = cadena.trimStart()
document.write(resultado.length)