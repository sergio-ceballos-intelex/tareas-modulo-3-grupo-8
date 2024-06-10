// // ## Punto 1

let number = [1, 2, 3, 4, 5]; 
let total = 2;

for (let number = 1; number <=5; number++) {
    let total = number * 2;
    console.log("El resultado de " , number , " * 2 es: " , total);
}

console.log("--------------------------------------");
// 



// // ##Punto 2

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];

  let precioMasBajo =productos[0];
  for(let element = 0; element <= productos.length; element++ ){
    if( precioMasBajo > productos[element]){

      precioMasBajo = productos[element]
    }
}
console.log(precioMasBajo);

console.log("--------------------------------------");
    

// ##Punto 3.

let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];

  for(let año = 0; año < estudiantes.length; año++ ){
    
    estudiantes[año].edad ++;
}
console.log(estudiantes);

console.log("--------------------------------------");


// // ##Punto4.

let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];
const letraBuscada = 'E';
const libroBuscado = [];

for (let index = 0; index < libros.length; index++) {
  const element = libros[index].titulo.charAt(0).toUpperCase();
  if (element===letraBuscada) {
    libroBuscado.push(libros[index]);
  }
}

console.log(libroBuscado);

console.log("--------------------------------------");


// ##Punto 5.

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
const resultado= frutas1.concat(frutas2);
console.log(resultado);