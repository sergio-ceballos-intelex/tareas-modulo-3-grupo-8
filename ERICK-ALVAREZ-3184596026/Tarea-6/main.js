//Ejercicio de bucle for arrays:

let numeros = [1,2,3,4,5];
let newArray =[];
for (let i = 0; i < numeros.length; i++){
    newArray.push(numeros[i]*2)
}

console.log("New Array: ", newArray);
console.log("______________________________________________________")
//Ejercicio de busqueda en arrays de objetos:

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];
   

let precioBajo = productos[0];

for(let a = 1; a < productos.length; a++){
  if (productos[a].precio < precioBajo.precio){
    precioBajo = productos[a];
  }
}

console.log("El producto con el menor precio es: ", precioBajo.nombre , "Con un precio de: ", precioBajo.precio);

    console.log("______________________________________________________")
//Ejercicio de modificacion de propiedades de objetos en un array:

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

  for(let g = 0; g < estudiantes.length; g++){
    let suma = estudiantes[g].edad + 1;
    estudiantes[g].edad = suma
    
  }
  console.log("Array sumando +1 a la edad")
  console.log(estudiantes)
  console.log("______________________________________________________")

  //Ejercicio de filtrado de arrays de objetos:

  let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ]; 

  console.log("Los libros que contienen El son: ")
  for (let h = 0; h < libros.length; h++){
    let title = libros[h].titulo.includes("El")
    
    if(title == true){
        
        console.log(libros[h].titulo)
    }
    
  }

  console.log("______________________________________________________")

  //Ejercicio de concatenacion de Arrays:

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for(let k = 0; k < frutas2.length; k++){
    frutas1.push(frutas2[k])
    
}

console.log(frutas1)




  
    
