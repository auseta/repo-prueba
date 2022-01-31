//? METODOS DE REPETICION

//*filter() - crea un nuevo array con todos los elementos que cumplan la condicion
// let numeros = ["abcedario", "manzana", "pedro", "dedo", "cabeza"];

// numeros.filter((numero) => {    //el parametro "numero" es equivalente a cada elemento del array
//     document.write(numero + "<br>")
// })   //lo que esta dentro del filter: recorre el bucle y almacena un dato y lo imprime y asi sucesivamente hasta que termine el array

//*forEach() - ejecuta la funcion indicada una vez por cada elemento del array [es igual a filter
let palabras = ["abecedario", "manzana", "pedro", "dedo", "cabeza"];

palabras.forEach((palabra) => {
    document.write(palabra + "<br>")

})



//! AUNQUE AMBOS METODOS RESULTEN IGUALES, LA REALIDAD ES QUE filter() ES MAS COMPLETO Y NOS PERMITE REALIZAR CONDICIONES QUE forEach() no