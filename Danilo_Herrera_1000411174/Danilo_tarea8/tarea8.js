//________________________________________________________
//Callbacks en Manejo de Datos:

function sumarArreglo(numeros, callback) {
    var sum = 0;
    for(var i = 0; i < numeros.length; i++){
        sum += numeros[i];
    }
    callback(sum)
  }

 var numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); 
  });

//________________________________________________________
//Callbacks para Filtrar Elementos de un Arreglo:

function filtrarArreglo(arreglo, callbackFiltro) {
    
    var filtArray = arreglo.filter(elemento => callbackFiltro(elemento))
    return filtArray;
  }

  var numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); 

//________________________________________________________
//Callbacks: Filtrar Números Pares:

function filtrarPares(numeros, callback) {
    
    var filtArray = numeros.filter(number => number % 2 === 0)
    callback(filtArray)
  }

function mostrarPares(numerosPares) {
    console.log("numeros pares:")
    numerosPares.forEach(number => {
        console.log(number)
    });
 }

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
filtrarPares(numeros2, mostrarPares);

//________________________________________________________
//Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur

const vueloBogMad = (callback) => {
    console.log("Estoy en Bogota")
    setTimeout(() => {
        console.log('Vuelo Bogota - Madrid, me demoré 7 horas');
        callback();
    }, 7000);
};

const vueloMadFrank = (callback) => {
    console.log("Llegué a Madrid")
    setTimeout(() => {
        console.log('Vuelo Madrid - Frankfurt, me demoré 2 horas');
        callback();
    }, 2000);
};

const vueloFrankSeul = (callback) => {
    console.log("Llegué a Frankfurt")
    setTimeout(() => {
        console.log('Vuelo Frankfurt - Seul, me demoré 2 horas');
        callback();
    }, 2000);
};

const destinoFinal = () =>   console.log("Llegué a Seul")
;


// Esto se conoce como callback hell
vueloBogMad(() => {
    vueloMadFrank(() => {
        vueloFrankSeul(() => {
            destinoFinal()
        });
    });
});
