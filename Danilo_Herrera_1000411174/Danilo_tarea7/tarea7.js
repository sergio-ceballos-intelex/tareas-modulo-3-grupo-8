
//___________________________________________________________________________
//Punto 1: Obteniendo estadisticas de productos:

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const itemStock = productos.filter(productos => productos.stock > 0);
console.log(itemStock);

const prodName = productos.map( productos => productos.nombre);
console.log(prodName)
console.log("____________________________________")

//___________________________________________________________________________
//Punto 2: Acceso y Modificación Básica de Datos:

var estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log(estudiantes[1].nombre)
estudiantes[0].edad=25;
console.log(estudiantes[0])
console.log("____________________________________")

//___________________________________________________________________________
//Punto 3: Cálculo de Estadísticas Básicas:

var sum = 0;
estudiantes.forEach((estudiante,i) => {
    sum += estudiante.edad;
});

console.log( "suma de edades =",sum)
console.log( "promedio de edades =",sum/estudiantes.length)
console.log("____________________________________")

//___________________________________________________________________________
//Punto 4: Búsqueda y Filtrado de Datos:

const estudiantes2 = [
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

var mejorEst = estudiantes2[0];
var best = estudiantes2.filter( function(i) { 
    if (i.promedio > mejorEst.promedio){mejorEst.promedio=i.promedio;}
});
console.log("mejor promedio:", mejorEst.nombre, ",edad:", mejorEst.edad)


console.log("Estudiantes mayores")

estudiantesMayores = estudiantes2.filter(estudiantes2 => estudiantes2.edad >= 20);
estudiantesMayores.forEach(estudiantesMayores => {
    console.log(estudiantesMayores)    
});