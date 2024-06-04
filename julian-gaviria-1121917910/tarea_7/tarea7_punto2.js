//punto numeor 2 de la tarea 7 
//coded By Juliangadev
/*
Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. Ejemplo

  const estudiantes = [
      { nombre: "Camilo", edad: 33, promedio: 10 },
      { nombre: "Juan", edad: 30, promedio: 6 },
      { nombre: "Andres", edad: 29, promedio: 8.7 },
 ];
*/

/**
2.1.Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
2.2 Imprime en la consola el nombre del segundo estudiante.
2.3 Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.
 */

//2.1.Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
const estudiantes = [
    { nombre: "Juan", edad: 41, promedio: 4 },
    { nombre: "Juana", edad: 30, promedio: 9.5 },
    { nombre: "William", edad: 27, promedio: 4.7 },
];
//2.2 Imprime en la consola el nombre del segundo estudiante.
//option 1
console.log(estudiantes[1].nombre)
//option 2
let arrayPosition = 1
const secStudent = estudiantes[arrayPosition].nombre
console.log(secStudent)

//2.3 Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.
estudiantes[0].edad = 25
console.log(estudiantes[0])




