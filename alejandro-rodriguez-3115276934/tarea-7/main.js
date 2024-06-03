/*este código lo que hace es devolverme los elementos cuyo esto es mayor a cero */

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
const sinStock= productos.filter(e => e.stock > 0)
console.log(sinStock);

/* Con la fn Filter retornamos los elementos cuyo stock es mayor a 0 */

const name=productos.map(e => e.nombre)
console.log(name);

/* Usando la fn .map retornamos solamente el nombre de cada elemento */
let total= 0;
for(let i=0;i < productos.length; i++){
  total += productos[i].precio
}
console.log(total)

/* Por cada iteracion total toma el valor de precio y lo va sumando */

// ===============================================================================

const estudiantes1 = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

estudiantes1[0].edad=25;
console.log(estudiantes1[1].nombre)
console.log(estudiantes1[0])

/* Se modifica edad de estudiante, se llama al nombre del segundo estudiante y se 
imprime el nombre del estudiante al cual se le cambio la edad */

const estudiantes = [
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
  const resulEdad= estudiantes.map(e => e.edad)
  const sumatoria= resulEdad.reduce((add, resul) => add + resul, 0)
    console.log("Estas son  las edades de los estudiantes ",resulEdad); 

    console.log("   ");

  console.log(sumatoria);  ///estos son los promedios de cada uno de los estudiantes
console.log("   ");
  const promediox= estudiantes.map(e => e.promedio)
const PromedioMasAlto= Math.max(...promediox)
console.log("   ");
console.log("Este es el promedio mas alto ", PromedioMasAlto) // este es el promedio mas alto
console.log("   ");
console.log("Este es el estudiante con el promedio mas alto: ", estudiantes[6].nombre, estudiantes[6].edad)  //promedio mas alto
console.log("   ");
const estudiantesMayores= estudiantes.filter(e => e.edad > 20)
console.log("   ");
console.log("Estos estudiantes son mayoes de 20 años ", estudiantesMayores)
