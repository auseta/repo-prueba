//? METODOS ACCESORES

//*join() - une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve

// let array = ["abecedario", "manzana", "pedro", "dedo", "cabeza"];

// document.write(array[0] + "<br>")

// let resultado = array.join(" - ") //convierte todo en una cadena de texto y los separa como lo hayamos indicado en el join 

// document.write(resultado)

//*slice() - Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
let array = ["abecedario", "manzana", "pedro", "dedo", "cabeza"];

document.write(array + "<br>")

let resultado = array.slice(0,3)

document.write(resultado + "<br>")

//si no sabemos que numero esta al final...

let resultado2 = array.slice(0,); //el segundo parametro queda vacio, SI QUISIERAMOS SABER EL PENULTIMO SE PONE -1 Y ASI SUCESIVAMENTE

document.write(resultado2)