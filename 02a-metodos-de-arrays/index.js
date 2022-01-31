//? METODOS TRANSFORMADORES


//*pop() - Elimina el ultimo elemento de un array
// let nombres = ["pedro", "maria", "jorge"]

// document.write(`${nombres} - Cadena sin modificar<br> `);
// let resultado = nombres.pop() //aca estoy guardando el elemento que quitamos, en este caso "jorge"

// document.write(`${resultado} - Elemento suprimido del array <br>`);
// document.write(`${nombres} - Cadena actualmente`)

//*shift() - Elimina el primer elemento de un array
// let nombres = ["pedro", "maria", "jorge"]

// document.write(`${nombres} - Cadena sin modificar<br> `);
// let resultado = nombres.shift() //aca estoy guardando el elemento que quitamos, en este caso "pedro"

// document.write(`${resultado} - Elemento suprimido del array <br>`);
// document.write(`${nombres} - Cadena actualmente`)

//*push() - Agrega un elemento al final del array
// let nombres = ["pedro", "maria","jorge"];

// document.write(nombres + "<br>")

// let resultado = nombres.push("Jorgito", "Robert")

// document.write(nombres)

//*reverse() - Inviere el orden de los elementos de un array
// let numeros = [1, 2, 3, 4, 5];

// document.write(numeros + "<br>");

// let resultado = numeros.reverse();

// document.write(resultado)

//*unshift() - Agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array
// let numeros = [1, 2, 3, 4, 5];

// document.write(numeros + "<br>");

// numeros.unshift(1,3) //los agrego al inicio del array en el orden indicado; ej [1,3,1,2,3,4,5]

// document.write(numeros)

//*sort() - ordena los elementos de un array localmente y devuelve el arreglo ordenado
// let numeros = [5, 0, 8, 4, 2, 3, 7, 1, 6]; 

// document.write(numeros + "<br>")    

// numeros.sort()  //tambien ordena por abecedario

// document.write(numeros)

//*splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
let array = ["cadena", "dedo", "manzana", "pedro", "augusto"];

document.write(array + "<br>");

//array.splice(3, 2) // ESTO ES PARA ELIMINAR/ .splice(posicion, cant.de elementos a eliminar), en este caso elimina pedro(elemento donde se posiciona) y augusto. al elegirse 2 elementos a elimirar estos serian el del indice y el siguiente

//array.splice(3, 2, "Tobey Maguire", "Andrew Garfield",) //ESTO ES PARA REMPLAZAR y AGREGAR/ .splice(posicion, cant de elementos a reemplazar, elemento de reemplazo, elemento de reemplazo, ELEMENTO AGREGADO)

array.splice(-1, 1, "Tobey Maguire", "Andrew Garfield", "augusto") //ESTO ES PARA AGREGARLOS AL FINAL...LO MEJOR SERIA USAR UN PUSH

document.write(array)