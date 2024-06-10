let numeros = [1, 2, 3, 4, 5];
let numeros2=[];
for(let i=0;i < 5;i ++){
let resul=numeros[i]*2;
  numeros2.push(resul);
}
 console.log(numeros2);

 /* primer punto tarea 6 se recorre el array con un for y en casa iteracion se 
 multiplica el valor por 2 */

// =============================================================================
 let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
  
    for(const mayor in productos){
      const menorPrecio=productos.map(e => e.precio)
      const minimoPrecio= Math.min(...menorPrecio)
      
    // console.log(minimoPrecio)
    }
  console.log(productos[0].nombre, "$ ", productos[0].precio)

  /* se crea un bucle for para iterar elementos, se mapea y se devuelve el valor
  de precio, luego con Math.max se busca el numero mayor en el array */

// ==============================================================================

  /* Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.*/

let estudiante3 = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  for(let i=0;i < estudiante3.length;i++){
    let unAñoMas= estudiante3[i].edad + 1;
  
  console.log(unAñoMas);
  }
  /* Se creo un bucle for para iterar la edad de los estudiantes y en cada 
  iteracion aumentamos su valor en 1. */ 

// =============================================================================

// Dado el siguiente array de objetos que representan libros:

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  // Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.
  
  for (let i = 0; i < 1; i++) {
    const inicEL = libros.filter(e => (e.titulo).startsWith("El"));
    
    console.log(inicEL)
  }

  /*  se creo un ciclo para recorrer el array libros y extraemos e imprimimos 
  los libros quw contienen la segla "EL"

  ================================================================================*/

  //Dados los siguientes arrays de frutas:

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
// Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.

let sumarArray= frutas1.concat(frutas2);

console.log(sumarArray)

/* No vi necesario el for, concatene directamente los dos arrays con .concat */

