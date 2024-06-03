// PUNTO 1
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

// item 1
let arrayList = productos.filter(function(producto){
    return producto.stock > 0;
});
console.log(arrayList);

// item 2
let arrayList2 = productos.map((producto) => producto.nombre);
console.log(arrayList2);

// PUNTO 2
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// item 2
console.log("Este es el nombre del segundo estudiante: ",estudiantes[1].nombre);

// item 3
estudiantes[0].edad = 25;
console.log(estudiantes[0]);

// PUNTO 3
// item 1
let suma = 0;
let contador = 0;

estudiantes.forEach(function(estudiante) {
  suma += estudiante.edad;
  contador++;
});

const resultado = suma / contador;

console.log("Esta es la suma de las edades: ", suma);
console.log("Este es el promedio de las edades: ", resultado);

// PUNTO 4
const estudiantes4 = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
      genero: "Femenino",
      carrera: "Ingeniería Civil",
      ciudad: "Bogotá",
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
      genero: "Masculino",
      carrera: "Medicina",
      ciudad: "Medellín",
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
      genero: "Femenino",
      carrera: "Administración de Empresas",
      ciudad: "Cali",
    },
    {
      nombre: "Pedro",
      edad: 23,
      promedio: 82,
      genero: "Masculino",
      carrera: "Derecho",
      ciudad: "Barranquilla",
    },
    {
      nombre: "Laura",
      edad: 24,
      promedio: 88,
      genero: "Femenino",
      carrera: "Arquitectura",
      ciudad: "Cartagena",
    },
    {
      nombre: "Carlos",
      edad: 20,
      promedio: 75,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre: "Sofía",
      edad: 22,
      promedio: 95,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
  ];

// item 1
let promedioMasAlto = 0;
estudiantes4.filter(function(estudiante){
  if(estudiante.promedio > promedioMasAlto){
    promedioMasAlto = estudiante.promedio;
  }
});
console.log("Este ees el promedio mas alto: ",promedioMasAlto,estudiantes4[6].nombre, estudiantes4[6].edad)

// item 2
let estudiantesMayores = estudiantes4.filter((estudiante) => estudiante.edad > 20);

// item 3
console.log(estudiantesMayores);