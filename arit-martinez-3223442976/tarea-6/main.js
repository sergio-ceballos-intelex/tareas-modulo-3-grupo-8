// primer punto
let numeros = [1, 2, 3, 4, 5];
let multiplicacion = [];
for(let operacion = 0; operacion < numeros.length; operacion++){
   let x = numeros[operacion] * 2;
    multiplicacion.push(x)
}
console.log(multiplicacion);

// segundo punto
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];
let menor = productos[0]
for(let p2 = 0; p2 < productos.length; p2++){
    if(productos[p2].precio < menor.precio){
        menor = productos[p2]
    }
}
console.log(menor);

// tercer punto
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

for(let z = 0; z < estudiantes.length; z++){
    let suma = estudiantes[z].edad + 1;
    estudiantes[z].edad = suma;
}
console.log(estudiantes)

// cuarto punto 
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
let librosSeleccionados = [];
for(let a = 0; a < libros.length; a++){
    if(libros[a].titulo.includes("El")){
    librosSeleccionados.push(libros[a]);
    }
}
console.log(librosSeleccionados);

// quinto punto
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for(let b = 0; b < frutas2.length; b++){
    frutas1.push(frutas2[b])
}
console.log(frutas1)