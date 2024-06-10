/*_______________________________________________________________________*/
/*Ejercicio de Bucle For con Arrays:*/

let numeros = [1, 2, 3, 4, 5];
let num2 = [];

numeros.forEach((element, index) => num2[index] = numeros[index]*2);

console.log(num2)

/*_______________________________________________________________________*/
/*Ejercicio de Búsqueda en Arrays de Objetos:*/

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];

  var prod = productos[1].precio;
  var iprod = 0;
  for (let i = 0; i < productos.length; i++) {
    if(productos[i].precio<prod){
        prod = productos[i].precio;
        iprod = i;
    }
  }
  console.log("El producto", productos[iprod].nombre,"cuenta con el precio mas bajo, cuesta: ",prod)

/*_______________________________________________________________________*/
  /*Ejercicio de Modificación de Propiedades de Objetos en un Array:*/
let estudiantes = [
{ nombre: "Juan", edad: 20 },
{ nombre: "María", edad: 22 },
{ nombre: "Pedro", edad: 19 },
];

estudiantes.forEach((element, i) => (estudiantes[i].edad++));
console.log(estudiantes)

/*_______________________________________________________________________*/
  /*Ejercicio de Filtrado de Arrays de Objetos:*/

let libros = [
{ titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
{ titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
{ titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

let filterlibros = [];
 for (let i = 0; i < libros.length; i++) {
    if ( (libros[i].titulo).includes("El")){
        filterlibros.push(libros[i]);
        console.log(filterlibros[filterlibros.length-1])
    }
 }

/*_______________________________________________________________________*/
/*Ejercicio de Concatenación de Arrays:*/

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

function conc2( array1,array2){
    const tLength = array1.length + array2.length;
    let arrayR =[];
    for (let i = 0; i < tLength; i++) {
        if(i< array1.length){
            arrayR[i] = array1[i];
        }
        else{
            arrayR[i] = array2[i-array1.length];
        }
    }
    return(arrayR)
}

newArray = conc2(frutas1,frutas2);
console.log(newArray)
