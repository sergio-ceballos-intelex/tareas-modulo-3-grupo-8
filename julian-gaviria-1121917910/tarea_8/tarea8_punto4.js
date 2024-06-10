//Tarea 8:Callbakcs
//coded By Julian Gaviria= Juliangadev

/* 
Punto 8.4. Simulacion vuelo desde Colombia hasta Corea del Sur

Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:

Vuelo Bogota - Madrid: 7000ms (7 horas)
Vuelo Madrid - Frankfurt: 2000ms (2 horas)
Vuelo Frankfurt - Seul: 10000ms (10 horas)
Llegada a Seul
El programa debe imprimir lo siguiente:

   Estoy en Bogota
  Vuelo Bogota - Madrid, me demoré 7 horas
  / Llegué a Madrid
  /Vuelo Madrid - Frankfurt, me demoré 2 horas
  / Llegué a Frankfurt
  / Vuelo Frankfurt - Seul, me demoré 10 horas
  / Llegué a Seul
*/

function simularVuelo(array) {
  console.log(`Estoy en ${array[0]}`)
  setTimeout(() => {
    console.log(`Viajando de ${array[0]} a ${array[1]}...`)
  }, 1000);
  setTimeout(()=>{
    console.log(`Llegué a ${array[1]}`)
  },7000)
  setTimeout(() => {
    console.log(`Viajando de ${array[1]} a ${array[2]}...`)
  }, 7200);
  setTimeout(()=>{
    console.log(`Llegué a ${array[2]}`)
  },9200)
  setTimeout(() => {
    console.log(`Viajando de ${array[2]} a ${array[3]}...`)
  }, 9400);
  setTimeout(()=>{
    console.log(`Llegué a ${array[3]}`)
  },12000)
}

const destinos = ["Bogotá","Madrid", "Franfurkt","Seul"]

simularVuelo(destinos)