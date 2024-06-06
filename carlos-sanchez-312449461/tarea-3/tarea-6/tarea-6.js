//punto uno

let numero = [1,2,3,4,5];
let por= [];

for(let x = 0; x < numero.length; x++){
    let igual = numero[x]*2;
    por.push(igual)
}
console.log(por);


    // punto dos 
     
     let persona = [
          { nombre: "Juan", edad: 20 },
          { nombre: "María", edad: 22 },
          { nombre: "Pedro", edad: 19 },
        ];
        for (let name = 0; name < persona.length; name++) {
          let conversoredad = persona [name].edad + 1;
          persona [name].edad = conversoredad;
          console.log(conversoredad);
        }
        console.log(persona);

// punto tres 

let producto = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 10 },
  ];

  let masbajo = producto[0];
  for(let valor = 0; valor < producto.length; valor++){
    if (producto[valor].precio< masbajo.precio){
        masbajo = producto [valor]
    }
}
console.log ( 'el producto mas economico es', masbajo.nombre);

// punto cuatro 

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

for(let uno = 0; uno <= libros.length -1; uno++){
    let cabeza = libros[uno];
    if(cabeza.titulo.includes('El')){
      console.log(libros[uno].titulo)
    }
  }

  //punto cinco 

  let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

let conquetanar = frutas2.length


for(let fruit = 0; fruit <= conquetanar -1; fruit++){
  frutas1.push(frutas2[fruit])
}
console.log(frutas1);

