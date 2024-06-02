// task-1

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];


// // filtrar stock mayor de 0

// const upperToCero = productos.filter(number => number.stock > 0);

// console.log(upperToCero);

// // map = generar solo nombres de productos

// let onlyProducts = productos.map(function(product){
//     return product.nombre
// })

// console.log(onlyProducts);

// // (opcional) calcular precio total de productos disponibles y suma total de todos ellos

// let tt = productos.map(function(product){
//     product = product.precio * product.stock;
//     return product;
// })
// console.log(tt);

// // uso de .reduce = .reduce(acc: acumulador, el: elemeto que se esta iterando) => acc + el, 0(valor inicial del acumulador))

// let total = tt.reduce((acumulador, elemento) =>
//     acumulador + elemento ,0)

// console.log(total);

// // TASK 2 

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// // Imprime en la consola el nombre del segundo estudiante.

// let segundoNombre = estudiantes[1].nombre;
// console.log(segundoNombre);

// //Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.

// let firstStudentAge = estudiantes[0].edad = 25;
// console.log(firstStudentAge);
// console.log(estudiantes[0]);

// TASK 3

const estudiantes2 = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
// Calcula el promedio de edad de los estudiantes.

let contador = estudiantes2.length
console.log(contador);

let inicio = 0

estudiantes2.forEach(elemento => {
    inicio += elemento.edad;
    return inicio
})
console.log(`la suma de las edades de los estudiantes2 es de ${inicio}`);

let totalPromedio = inicio / contador;
console.log(`el promedio de las edades es de ${totalPromedio.toFixed(2)}`);

// forma alterna en la que pude lograrlo a la primera:

// let prom = estudiantes2.reduce((acc,el) =>
//     acc + el.edad,0
// )

// let total = prom / estudiantes2.length
// console.log(total);