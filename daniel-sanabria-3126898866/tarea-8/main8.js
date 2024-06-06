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