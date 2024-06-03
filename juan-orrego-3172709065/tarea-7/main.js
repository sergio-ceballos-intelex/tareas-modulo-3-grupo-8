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


let prodTotalCost = 0;
productos.forEach(element => {
    prodTotalCost += element.precio;
});

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