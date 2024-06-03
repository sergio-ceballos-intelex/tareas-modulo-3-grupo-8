// Punto 1: Obteniendo estadisticas de productos:
const productos = [
  { nombre: "Camiseta", precio: 20, stock: 10 },
  { nombre: "Pantalón", precio: 30, stock: 5 },
  { nombre: "Zapatos", precio: 50, stock: 0 },
  { nombre: "Bufanda", precio: 15, stock: 8 },
];
let productosEnStock = productos.filter((objetos) => objetos.stock > 0);
console.log('Productos en stock',productosEnStock);
console.log('-----------------------------------');

let nombresProductos = productos.map((objetos) => objetos.nombre);
console.log('Nombres de los productos',nombresProductos);
console.log('-----------------------------------');

let precioTotalProductosD = 0
let precioTotal= productosEnStock.forEach((objeto)=> {
  precioTotalProductosD = precioTotalProductosD + objeto.precio
});
console.log('Precio total de los productos disponibles',precioTotalProductosD);
console.log('-----------------------------------');


// // Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. 

const estudiantes = [
  {nombre:'Miguel', edad: 18, promedio: 5}, 
  {nombre:'Sebastian', edad: 21, promedio: 9},
  {nombre:'Felipe', edad: 40, promedio: 2},
];
console.log(estudiantes[1].nombre)
console.log('-----------------------------------');

estudiantes[0].edad = 25
console.log(estudiantes[0])
console.log('-----------------------------------');

// Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).
let sumaEdadEstudiantes = 0
let PromedioEdad = 0
estudiantes.forEach((estudiante)=>{sumaEdadEstudiantes = sumaEdadEstudiantes + estudiante.edad
  PromedioEdad = sumaEdadEstudiantes / estudiantes.length
});
console.log('La suma de las edades es:',sumaEdadEstudiantes,'El promedio de edad de los estudiantes es;', PromedioEdad.toFixed(1));
console.log('-----------------------------------');

// Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
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
let promedioMasAlto = estudiantes2.filter((estudiante)=> estudiante.promedio === 100 || estudiante.promedio > 90);
promedioMasAlto.forEach((estudiante)=>{console.log('El estudiante con mayor promedio es:',estudiante.nombre,'edad:',estudiante.edad,'Con un promedio de:',estudiante.promedio)});
let estudiantesMayores = estudiantes2.filter((estudiante)=> estudiante.edad > 20);
console.log('Los estudiantes mayores de 20 son:',estudiantesMayores);