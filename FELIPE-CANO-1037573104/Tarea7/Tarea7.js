//Punto 1: Obteniendo estadisticas de productos**************************************************************************************************

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

console.log(productos);

const productosConStock=productos.filter(element=>element.stock>0); // Filtrado de productos e impresion en pantalla
console.log(productosConStock);

const nombreDeProductos=productos.map(element=>element.nombre); // mapeo de productos (Nombres de Productos)
console.log(nombreDeProductos);

let suma=0;
for (let i = 0; i < nombreDeProductos.length; i++) {
    suma+=nombreDeProductos[i].precio // Hallar el total de multiplicar los productos en stock por su precio
}
console.log(suma);


//Punto 2: Acceso y Modificación Básica de Datos****************************************************************************************

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log(estudiantes[1].nombre); // Imprima en consola el nombre del segundo estudiante******************************************************

estudiantes[0].edad=25;
console.log(estudiantes[0]); // Imprima en consola la informacion del primer estudiante ya actualizado***********************************

//Punto 3: Cálculo de Estadísticas Básicas***********************************************************************************************

const sumaEdades=estudiantes.map(element=>element.edad);
console.log(sumaEdades);
let num=0;
estudiantes.forEach(function(estudiante){
    num += estudiantes.edad
})
console.log(num);
