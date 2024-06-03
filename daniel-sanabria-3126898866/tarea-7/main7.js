// task-1

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];


// filtrar stock mayor de 0

const upperToCero = productos.filter(number => number.stock > 0);

console.log(upperToCero);

// map = generar solo nombres de productos

let onlyProducts = productos.map(function(product){
    return product.nombre
})

console.log(onlyProducts);

// (opcional) calcular precio total de productos disponibles y suma total de todos ellos

let tt = productos.map(function(product){
    product = product.precio * product.stock;
    return product;
})
console.log(tt);

// uso de .reduce = .reduce(acc: acumulador, el: elemeto que se esta iterando) => acc + el, 0(valor inicial del acumulador))

let total = tt.reduce((acumulador, elemento) =>
    acumulador + elemento ,0)

console.log(total);

// TASK 2 

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Imprime en la consola el nombre del segundo estudiante.

let segundoNombre = estudiantes[1].nombre;
console.log(segundoNombre);

// Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.

let firstStudentAge = estudiantes[0].edad = 25;
console.log(firstStudentAge);
console.log(estudiantes[0]);

// TASK 3

const estudiantes3 = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
// Calcula el promedio de edad de los estudiantes.

let contador = estudiantes3.length
console.log(contador);

let inicio = 0

estudiantes3.forEach(elemento => {
    inicio += elemento.edad;
    return inicio
})
console.log(`la suma de las edades de los estudiantes3 es de ${inicio}`);

let totalPromedio = inicio / contador;
console.log(`el promedio de las edades es de ${totalPromedio.toFixed(2)}`);

// forma alterna en la que pude lograrlo a la primera:

// let prom = estudiantes3.reduce((acc,el) =>
//     acc + el.edad,0
// )

// let totalAlterno = prom / estudiantes3.length
// console.log(totalAlterno);

// task 4

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

// Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.

let studentList = estudiantes4[0];

let highAverage = estudiantes4.filter((student) => {
    student.promedio > studentList;
    studentList = student;

})
console.log(studentList);




// Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.

let  olderStudents = [];

const studentsTwenty = estudiantes4
.filter(student => student.edad > 20)
.map(student => student.nombre)

olderStudents = olderStudents.concat(studentsTwenty) //.concat para concatenar

console.log(olderStudents);



// Imprime en la consola la información completa de los estudiantes mayores de 20 años.


let upperToTwenty = estudiantes4.filter((student) => {   // utilizando retun y llaves da lo mismo, que quitar los parentesis, llaves y return
    return student.edad > 19
    });

console.log(upperToTwenty);
