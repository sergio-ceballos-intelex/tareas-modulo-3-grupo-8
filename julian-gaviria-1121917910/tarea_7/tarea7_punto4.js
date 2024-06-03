//tarea numero 7 punto numero 4
//coded by JuliangaDev

/* 
Punto 4: Búsqueda y Filtrado de Datos: 

4.1 Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
4.2 Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
4.3 Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
4.4 Imprime en la consola la información completa de los estudiantes mayores de 20 años.
*/
// array global
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
  //4.1 Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
  const studentProm = estudiantes2.map(student => student.promedio)
  const highProm = Math.max(...studentProm)//se utilizó el recurso de MDN web docs /Math/max
  const studHProm = estudiantes2.filter(student => student.promedio )
 // 4.2 Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
const studentHighPromName = estudiantes2.filter(student => student.promedio === highProm)[0].nombre
const studentHighPromAge = estudiantes2.filter(student => student.promedio === highProm)[0].edad
console.log(`El estudiante con mayor promedio es ${studentHighPromName} con un promedio de ${highProm}, quien tiene una edad de ${studentHighPromAge} años`)


  //4.3 Filtra solo los nombres de los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
  const estudiantesMayoresName = estudiantes2.filter(age => age.edad > 20).map(name => name.nombre)

  console.log(estudiantesMayoresName)
//const nombres = estudiantesMayores.filter(name => name.nombre)
 //console.log(nombres) //aca intenté extraer solo los nombres
  //4.4 Imprime en la consola la información completa de los estudiantes mayores de 20 años.
const estudiantesMayores = estudiantes2.filter(age => age.edad > 20)
console.log(estudiantesMayores)