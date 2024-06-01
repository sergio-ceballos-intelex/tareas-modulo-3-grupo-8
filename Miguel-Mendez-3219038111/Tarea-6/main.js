// Ejercicio de bucle for con arrays
let numeros = [1, 2, 3, 4, 5];
let newArray = [];
for (let i = 0; i < numeros.length; i++) {
  let iterador = numeros[i];
  let operacion = iterador * 2;
  newArray.push(operacion);
}
console.log(newArray);

// Ejercicio de busqueda en arrays de objetos
// let productos = [
//   { nombre: "Camisa", precio: 20 },
//   { nombre: "Pantalón", precio: 30 },
//   { nombre: "Zapatos", precio: 50 },
// ];
// let productoPrecioBajo = productos[0];
// for (let i = 1; i < productos.length; i++) {
//   if (productos[i].precio < productoPrecioBajo.precio) {
//     productoPrecioBajo = productos[i];
//   }
// }
// console.log(
//   "El producto con el precio mas bajo es",
//   productoPrecioBajo.nombre,
//   "Con un precio de",
//   productoPrecioBajo.precio
// );

//Ejercicio de modificacion de propiedades de objetos en un array
// let estudiantes = [
//   { nombre: "Juan", edad: 20 },
//   { nombre: "María", edad: 22 },
//   { nombre: "Pedro", edad: 19 },
// ];
// for (let i = 0; i < estudiantes.length; i++) {
//   let iteradorEdad = estudiantes[i].edad + 1;
//   estudiantes[i].edad = iteradorEdad;
//   console.log(iteradorEdad);
// }
// console.log(estudiantes);

//Ejercicio de filtrado de arrays de objetos
// let libros = [
//   { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
//   { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
//   { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
// ];
// for (let i = 0; i < libros.length; i++) {
//   if (libros[i].titulo.includes("El")) {
//     console.log(libros[i].titulo);
//   }
// }

// Ejercicio de concatenacion de arrays
// let frutas1 = ["Manzana", "Plátano", "Naranja"];
// let frutas2 = ["Fresa", "Uva", "Piña"];
// for (let i = 0; i < frutas2.length; i++) {
//   frutas1.push(frutas2[i]);
// }
// console.log(frutas1);
