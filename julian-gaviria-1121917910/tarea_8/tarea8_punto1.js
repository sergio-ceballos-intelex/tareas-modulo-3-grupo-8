//Tarea 8:Callbakcs
//coded By Julian Gaviria= Juliangadev

/* 
Punto 8.1. Callbacks en Manejo de Datos:

Descripción: Crea una función que tome un arreglo de números y un callback, 
y llame al callback con el resultado de sumar todos los números del arreglo.
Ejercicio:

function sumarArreglo(numeros, callback) {
  (Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado)
}
const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
  console.log(resultado); // Debería imprimir 15
});
*/
console.log("-------Punto 8.1 Callbacks en Manejo de Datos------")
const numeros = [1, 2, 3, 4, 5];

function sumarArrego(array, callbackSum) {
  let suma = 0
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  callbackSum(suma)
}

sumarArrego(numeros, function (resultado) {
  console.log(`la suma del array es ${resultado}`);})

  