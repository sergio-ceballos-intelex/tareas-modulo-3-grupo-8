// ##PUNTO 1

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
// - Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).

const productoStock = productos.filter(elemento => elemento.stock > 0);

console.log(productoStock);

//   - Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo `["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]`

const nombreProducto = productos.map((element) => element.nombre);

console.log(nombreProducto);

//   - (Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos
let sumaPrecioTotal = 0;
productos.forEach((producto) => {
    sumaPrecioTotal += producto.precio;
});

console.log('la suma del precio total es :',sumaPrecioTotal)
// ##PUNTO 2

// - Imprime en la consola el nombre del segundo estudiante.
// - Actualiza la edad del primer estudiante a 25 años.
//   Imprime en la consola la información completa del primer estudiante después de la actualización.
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log(estudiantes[1]);
estudiantes[0].edad=25
console.log(estudiantes[0]);


// ##PUNTO 3.
// Calcula el promedio de edad de los estudiantes.
// Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

let sumaEdades = 0;
estudiantes.forEach((estudiante) => {
    sumaEdades += estudiante.edad;
});
console.log(sumaEdades);


let calcularPromedio = 0;
estudiantes.forEach((estudiante) => {
    calcularPromedio += estudiante.promedio;
});
console.log(calcularPromedio);


// ##PUNTO 4.

// Utiliza filter para encontrar al estudiante con el promedio más alto en el array.

const estudiante2 = [
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

// Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
// - Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.

const estudiantePromedioAlto = estudiante2.find((max,estudiante) => (estudiante.promedio > max.promedio ? estudiante : max));

console.log(estudiantePromedioAlto);
console.log(estudiantePromedioAlto.nombre);
console.log(estudiantePromedioAlto.edad);

// - Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
// - Imprime en la consola la información completa de los estudiantes mayores de 20 años.

const estudiantesMayores = estudiante2.filter(estudiante => estudiante.edad > 20);

console.log(estudiantesMayores);
