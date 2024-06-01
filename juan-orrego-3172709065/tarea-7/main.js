// Manipulación de objetos y arrays 

// 1. Ejercicio de Bucle For con Arrays:
let numeros = [1, 2, 3, 4, 5];
let numMul = [];

for(i = 0; i < numeros.length; i++) {
    numMul.push(numeros[i]*2);
}

console.log(`El array original es ${numeros} el array con los números *2 es ${numMul}`);
console.log('------');

// 2. Ejercicio de Búsqueda en Arrays de Objetos:
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];

let precioM = productos[0].precio;
let nombreM = productos[0].nombre;

// Con ciclo for
for(i = 0; i < productos.length; i++) {
    element = productos[i];
    if (element.precio < precioM) {
        precioM = element.precio;
        nombreM = element.nombre;
    }
}
console.log(`Con ciclo for, El producto con el menor valor es ${nombreM} con un precio de ${precioM}`)

// Con ForEach
productos.forEach(element => {
    if (element.precio < precioM) {
        precioM = element.precio;
        nombreM = element.nombre;
    }
});
console.log(`El producto con el menor valor es ${nombreM} con un precio de ${precioM}`);
console.log('------');
// como ya comprobe el entendimiento del ForEach ahora usare este para ciclos en array en toda esta tarea.
