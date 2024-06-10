const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

//- Calcula el promedio de edad de los estudiantes.
const sumaEdades = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0);

//- Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
const promedioEdades = sumaEdades / estudiantes.length;
console.log("El total de la suma de las edades es:", sumaEdades);
console.log("El promedio de edades de los estudiantes es:", promedioEdades.toFixed(2));