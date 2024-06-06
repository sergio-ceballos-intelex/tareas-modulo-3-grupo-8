// PUNTO 1
function sumarArreglo(numeros, callback) {
    const suma = numeros.reduce((total, num) => total + num, 0);
    callback(suma);
  }
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado);
  });
// PUNTO 2
function filtrarArreglo(arreglo, callbackFiltro) {
  const filtro = numeros2.filter(callbackFiltro)
  return filtro;
}

const numeros2 = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numeros2, function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); 

// PUNTO 3
function filtrarPares(numeros3, callback3) {
  const numerosPares = numeros3.filter(numero => numero % 2 === 0);
  callback3(numerosPares);
}

function mostrarPares(numerosPares) {
  console.log("Numeros pares: ", numerosPares);
}

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filtrarPares(numeros3, mostrarPares);

// PUNTO 4
function vueloCallback(origen, destino, tiempo, callback) {
  setTimeout(() => {
    console.log(`Llegué a ${destino}`);
    callback();
  }, tiempo);
  console.log(`En el vuelo de ${origen} - ${destino}, me demoré ${tiempo}ms (${tiempo / 1000} horas)`);
}

function simularVueloCallback() {
  vueloCallback('Bogota', 'Madrid', 7000, () => {
    vueloCallback('Madrid', 'Frankfurt', 2000, () => {
      vueloCallback('Frankfurt', 'Seul', 10000, () => {
        console.log("Ya ha llegado a su destino seul, esperemos vuelva pronto")
      });
    });
  });
}

simularVueloCallback();