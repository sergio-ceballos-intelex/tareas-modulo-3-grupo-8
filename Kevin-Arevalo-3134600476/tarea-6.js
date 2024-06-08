// Punto 1 Tarea 6
let numeros = [1, 2, 3, 4, 5];
let newArray = [];

for (let n = 0; n < numeros.length; n++) {
    newArray.push(numeros[n] * 2);
}
console.log(newArray);

// Punto 2 Tarea 6
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
  let articuloMasVarato = productos[0];
  for(let i=1; i <productos.length; i++ ){
    if(productos[i].precio < articuloMasVarato.precio ){
        articuloMasVarato.precio=productos[i]
    }
  }
  console.log('El producto mas varato es', articuloMasVarato.nombre,'con',articuloMasVarato.precio)

// Punto 3 Tarea 6
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  for(let i=0; i <estudiantes.length; i++){
    estudiantes[i].edad += 1
  }
  console.log(estudiantes)

// Punto 4 Tarea 6

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  let librosQueInicianConEl=[];

  for(let i =0; i <libros.length; i++){
    if (libros[i].titulo.includes('El')){
        librosQueInicianConEl.push(libros[i]);
    }
  }
  console.log(librosQueInicianConEl);

  // Punto 5 Tarea 6
  let frutas1 = ["Manzana", "Plátano", "Naranja"];
  let frutas2 = ["Fresa", "Uva", "Piña"];

  for(let i =0; i < frutas2.length; i++){
    frutas1.push(frutas2[i])
  }
  console.log (frutas1)