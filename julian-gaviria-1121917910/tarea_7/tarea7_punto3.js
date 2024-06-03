//tarea numero 7 punto numero 4
//coded by Juliangadev

/* 
unto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).

3.1 Calcula el promedio de edad de los estudiantes.
3.2 Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
*/
//array punto 2
const estudiantes = [
    { nombre: "Juan", edad: 41, promedio: 4 },
    { nombre: "Juana", edad: 30, promedio: 9.5 },
    { nombre: "William", edad: 27, promedio: 4.7 },
];

//3.1 Calcula el promedio de edad de los estudiantes.
const promAge = () => {
    const promAgearray = estudiantes.map(age => age.edad)
    console.log(promAgearray)
    let Age = 0
    for (let i = 0; i < promAgearray.length; i++) {
       Age += promAgearray[i];
    }
    let totalPromAge = Age / promAgearray.length
//3.2 Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
console.log(`La suma de las edades de los estudiantes es de ${Age} años`)
console.log(`La edad promedio de los estudiantes es de ${totalPromAge.toFixed(0)} años`)
   
}
promAge()
