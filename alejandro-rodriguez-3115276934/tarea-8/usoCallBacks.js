// Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

// Ejercicio:

 const numeros1 = [1, 2, 3, 4, 5];
 function sumaArreglo(numerosArray, callback) {
  let total= 0;
  for (let i = 0; i < numerosArray.length; i++) {
    total += numerosArray[i];
  }
  callback(total);
}

sumaArreglo(numeros1, (total) => console.log(`La suma del array es = ${total}`)); 

//=======================================================================================================

// Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos 
//que pasan el filtro. Ejercicio:

function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
    const filtro= arreglo.filter(callbackFiltro)
    return filtro
  }
  
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros,  numero => numero % 2 === 0);
  console.log(numerosPares); // Debería imprimir [2, 4]

//   =========================================================================================================================
/* 
 Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:

Vuelo Bogota - Madrid: 7000ms (7 horas)
Vuelo Madrid - Frankfurt: 2000ms (2 horas)
Vuelo Frankfurt - Seul: 10000ms (10 horas)
Llegada a Seul
El programa debe imprimir lo siguiente:

  // Estoy en Bogota
  // Vuelo Bogota - Madrid, me demoré 7 horas
  // Llegué a Madrid
  // Vuelo Madrid - Frankfurt, me demoré 2 horas
  // Llegué a Frankfurt
  // Vuelo Frankfurt - Seul, me demoré 10 horas
  // Llegué a Seul
Se puede usar setTimeout para simular el tiempo de los vuelos. */ 

const vueloMadrid= (callback) => {
    setTimeout(()=> {
    console.log("llegamos a Madrid")
    console.log("saldremos para Franckfurt seran 2 horas")
    callback(vueloSeul);
},7000)
};
const vueloFranckfurt= (callback) => {
        setTimeout(()=> {
        console.log("llegamos a franckfurt")
        console.log("Vuelo Frankfurt - Seul, me demoré 10 horas")
        callback();
    },2000)
};
const vueloSeul= () => {
        setTimeout(()=> {
        console.log("llegamos a Seul")
 },10000)
};

vueloMadrid(vueloFranckfurt)
console.log("estamos en Bogota")
console.log("Ya salimos para Madrid el vuelo Tardara 7 horas")