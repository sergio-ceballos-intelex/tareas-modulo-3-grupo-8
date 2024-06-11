//tarea numero 6 Repaso manipulación de objetos y arrays
// coded By Juliangadev
/* 
6.1. Ejercicio de Bucle For con Arrays:
Dado el siguiente array de números:

let numeros = [1, 2, 3, 4, 5];
Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.
*/
//array numeros
let numeros = [1, 2, 3, 4, 5];
//Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.
let numeros2 =[]
for (let i = 0; i < numeros.length; i++) {
   numeros2.push(numeros[i] * 2 )
   
}
console.log("6.1. Ejercicio de Bucle For con Arrays")
console.log(numeros2)

/* 
6.2 Ejercicio de Búsqueda en Arrays de Objetos:
Dado el siguiente array de objetos que representan productos:
let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];
Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto.
*/
// let productos = [
//     { nombre: "Camisa", precio: 20 },
//     { nombre: "Pantalón", precio: 30 },
//     { nombre: "Zapatos", precio: 50 },
//   ];
// console.log("6.2 Ejercicio de Búsqueda en Arrays de Objetos")
//  let productPrice = []
//  let lowest
//   for (let i = 0; i < productos.length; i++) {
//     productPrice.push(productos[i].precio)
//     lowest = Number(Math.min(...productPrice))
//     if (productos[i].precio === lowest) {
//         console.log(`el producto mas barato es ${productos[i].nombre} con un precio de $${productos[i].precio} pesos`)
//     }
//   }
//   console.log(productPrice)//imprime el array de los precios
//   console.log(lowest)//imprime el precio mas barato
let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];
console.log("6.2 Ejercicio de Búsqueda en Arrays de Objetos")

let lowest = 20
for (let i = 0; i < productos.length; i++) {
  
  if (productos[i].precio === lowest) {
      console.log(`el producto mas barato es ${productos[i].nombre} con un precio de $${productos[i].precio} pesos`)
  }
}
console.log(productos)//imprime el array de los precios
console.log(lowest)//imprime el precio mas barato
/* 
6.3 Ejercicio de Modificación de Propiedades de Objetos en un Array:
Dado el siguiente array de objetos que representan estudiantes:

let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];
Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.
 */

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

  for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].edad += 1
  }
  console.log("6.3 Ejercicio de Modificación de Propiedades de Objetos en un Array")
  console.log(estudiantes)

  
  /* 
 6.4 Ejercicio de Filtrado de Arrays de Objetos:
Dado el siguiente array de objetos que representan libros:

let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];
Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros. */
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
let libros2 =[]
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].titulo.includes("El")){
        libros2.push(libros[i])
        console.log(`El libro que que contine "El" en su titulo es "${libros2[i].titulo}" de ${libros2[i].autor}`) 
    }

  }
  console.log("6.4 Ejercicio de Filtrado de Arrays de Objetos")
  console.log(libros2)//imprime el array resultante

  
  /* 
  6.5 Ejercicio de Concatenación de Arrays:
Dados los siguientes arrays de frutas:

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.
   */
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
      frutas1.push(frutas2[i])
}
console.log(" 6.5 Ejercicio de Concatenación de Arrays")
console.log(frutas1)//se modifica el array inicial
  