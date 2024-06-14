//Ejercicio de Bucle For con Arrays-Tarea 6 *************************************************************************************************************************

let numeros=[1,2,3,4,5];
let newnumeros=[];
console.log(numeros);
for (let i = 0; i < numeros.length; i++) {
     newnumeros.push(numeros[i] * 2);
   }
console.log(newnumeros);

//Ejercicio de Bucle For con Arrays -Tarea 6 ******************************************************************************************************************

let productos=[
    {nombre:"Camisa", precio:20},
    {nombre:"Pantalon", precio:30},
    {nombre:"Zapatos", precio:50},
];

let productoConPrecioMasBajo=productos[0];
for (let i = 0; i < productos.length; i++) {
    if(productos[i].precio<productoConPrecioMasBajo.precio){
        productoConPrecioMasBajo=productos[i].precio;
    }
}
console.log(productoConPrecioMasBajo);

// Ejercicio de Modificación de Propiedades de Objetos en un Array - Tarea 6 ************************************************************

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
console.log(estudiantes);  

  for (let i = 0; i < estudiantes.length; i++) {
    ++estudiantes[i].edad;
}
console.log(estudiantes);

// Ejercicio de Filtrado de Arrays de Objetos - Tarea 6 ***********************************************************************************

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

console.log(libros);
let newArrayLibros=[];
  
    for (let i = 0; i < libros.length; i++) {
      if(libros[i].titulo.startsWith("El")){
        newArrayLibros.push(libros[i]);
      } 
    }
console.log(newArrayLibros);

// Ejercicio de Concatenación de Arrays ***************************************************************************************************

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

console.log(frutas1);

for (let i = 0; i < frutas2.length; i++) {
    frutas1.push(frutas2[i]);
}
console.log(frutas1);