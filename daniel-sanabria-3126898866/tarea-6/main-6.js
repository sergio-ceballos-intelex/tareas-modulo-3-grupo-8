// task 1

let numeros = [1,2,3,4,5];
let numerosPor2= [];

for(let position = 0; position <= numeros.length -1; position++){
    let numerosx = numeros[position]*2;
    numerosPor2.push(numerosx)
}
console.log(numerosPor2);

// task 2

let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];

let lowestProductAndPrice = [];
let precioMasBajo = Infinity; // se usa para asegurar el precio mas bajo

for(let eachElement = 0; eachElement <= productos.length -1; eachElement++){
  if( productos[eachElement].precio < precioMasBajo){ // se pone .precio porque lo que estamos comparando es el precio dentro del array
      precioMasBajo = productos[eachElement].precio
      lowestProductAndPrice.push(productos[eachElement])
  }
  
}

console.log(lowestProductAndPrice);

// task 3

let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];


for (let index = 0; index <= estudiantes.length -1; index++) {
    let mas1 = estudiantes[index].edad + 1;
    estudiantes[index].edad = mas1
}console.log(estudiantes);

// task 4

let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

// let newBook = []

for(let i = 0; i <= libros.length -1; i++){
  let letraEl = libros[i];
  if(letraEl.titulo.includes("El")){
    console.log(libros[i].titulo)
  }
}

// task 5

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

let fruitsCount = frutas2.length


for(let count = 0; count <= fruitsCount -1; count++){
  frutas1.push(frutas2[count])
}
console.log(frutas1);

