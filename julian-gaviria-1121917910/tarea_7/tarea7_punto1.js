 //Tarea numero 7 clase 8 Manipulacion basica de arrays
//coded by Juliangadev

 /*
Punto 1: Obteniendo estadisticas de productos: Dado el siguiente array de productos.

    const productos = [
        { nombre: "Camiseta", precio: 20, stock: 10 },
        { nombre: "Pantalón", precio: 30, stock: 5 },
        { nombre: "Zapatos", precio: 50, stock: 0 },
        { nombre: "Bufanda", precio: 15, stock: 8 },
   ];

 1.1 Utilizando filter,genera un nuevo array que contenga los productos en stock 
 (todos los productos cuyo stock es mayor a cero).

 1.2 Utilizando map, genera un nuevo array con solo los nombres de los productos, 
 ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]

 1.3 (Opcional) Escribe un programa que calcule el precio total de los productos disponibles,
  para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos 
 */

//array global
  const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

//Punto 1.1  Filter
const stock = productos.filter( product => product.stock > 0 )
console.log(stock)

//punto 1.2 Map 
const productName = productos.map(product => product.nombre)
console.log(productName)

//punto 1.3 Calcular precio total (opcional)
const priceCalculate = () => {
    const stockPrice = stock.map(product => product.precio)
    let totalPrice = 0
    for (let i = 0; i < stockPrice.length; i++) {
        totalPrice += stockPrice[i];
    }
   console.log(`El precio total de los productos en stock es de $${totalPrice} pesos`)
   
}
priceCalculate()
