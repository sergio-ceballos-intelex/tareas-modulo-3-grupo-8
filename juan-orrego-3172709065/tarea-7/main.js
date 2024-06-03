function separar(num){
    console.log("");
    console.log(`---Punto ${num}---`);
}
separar(1);
// Punto 1: Obteniendo estadisticas de productos: 
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const prodOnStock = productos.filter(productos => productos.stock > 0);
console.log(prodOnStock);

const prodName = productos.map(productos => productos.nombre);
console.log(prodName);


// let prodTotalCost = 0;
// productos.forEach(element => {
//     prodTotalCost += element.precio;
// });

// Se cambio la suma con propiedad .reduce

let prodTotalCost = productos.reduce((total,productos) => total + productos.precio, 0);

console.log(`El precio total de todo los articulos es de $${prodTotalCost}`);
separar(2);

// Punto 2: Acceso y Modificación Básica de Datos:
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log(estudiantes[1].nombre);

estudiantes[0].edad = 25;
console.log(estudiantes[0]);
separar(3);

// Punto 3: Cálculo de Estadísticas Básicas:
// RECORDAR QUE SE REASIGNO LA EDAD DEL PRIMER ESTUDIANTE A 25.

// Con propiedad reduce:
const sumEdad = estudiantes.reduce((total,estudiantes) => total + estudiantes.edad, 0);
const promedioEdad = sumEdad / estudiantes.length;
console.log(`Sin map ni forEach, La suma de edades de todos los estudiantes es de: ${sumEdad} contando con un promedio en edad de: ${promedioEdad}`);

// Con map y forEach
const edades = estudiantes.map(estudiantes => estudiantes.edad);

let sumEdad1 = 0;
edades.forEach(element => {
    sumEdad1 += element;
});

const promEdad = sumEdad / estudiantes.length;
console.log(`Con map y forEach, la suma de todas las edades es de: ${sumEdad1} y el promedio es de: ${promEdad}`);
separar(4);


// 