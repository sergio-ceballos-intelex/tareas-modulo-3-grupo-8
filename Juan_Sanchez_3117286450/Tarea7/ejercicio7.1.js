const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

//- Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
const productosEnStock = productos.filter(producto => producto.stock > 0);
console.log(productosEnStock);

//- Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo `["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]`
const nombresDeProductos = productos.map(producto => producto.nombre);
console.log(nombresDeProductos);

//- (Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos
const precioTotalDisponibles = productos.reduce((total, producto) => {
    return total + (producto.stock > 0 ? producto.precio : 0);
}, 0);

console.log(precioTotalDisponibles);