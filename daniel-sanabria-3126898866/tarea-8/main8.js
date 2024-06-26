// task 1
//  Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

const numeros = [1, 2, 3, 4, 5];

function sumarArreglo(numero, callback) {
  let cero = 0;
    for (let i = 0; i < numero.length; i++) {
      let element = numero[i];
      cero += element;
    };
    callback(cero)
  };

  sumarArreglo(numeros, (resultado) => {console.log(resultado);});

//   task 2
// Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
const numeros2 = [1, 2, 3, 4, 5];

function filtrarArreglo(arreglo, callbackFiltro) {
    return arreglo.filter(callbackFiltro);
};

const numerosPares = filtrarArreglo(numeros2, function (numero) {
    return numero % 2 === 0;
});
console.log(numerosPares);
// Debería imprimir [2, 4]

// task 3
// Función para filtrar números pares y llamar a un callback con el resultado

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarPares(numeros, callback) {
  let pares = numeros.filter(numero => numero % 2 === 0);
  callback(pares);
}

// Callback para mostrar los números pares en la consola

function mostrarPares(numerosPares) {
  console.log(numerosPares);
} 

// Llamar a la función filtrarPares y pasar el callback mostrarPares

filtrarPares(numeros3, mostrarPares);

// task 4

console.log("estoy en Bogota");

const bogotaMadrid = (callback) => {
  setTimeout(() => {
    console.log("llegue a Madrid");
    callback();
  }, 7000);
}

const madridFrankfurt = (callback) => {
  setTimeout(() => {
    console.log("llegue a Frankfurt");
    callback()
  }, 2000);
};

const frankfurtSeul = () => {
  setTimeout(() => {
    console.log("llegue a Seul");
  }, 10000);
};


bogotaMadrid(() => {
  madridFrankfurt(() => {
    frankfurtSeul()
  })
});