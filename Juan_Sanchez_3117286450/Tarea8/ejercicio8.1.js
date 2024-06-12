//- **Callbacks en Manejo de Datos:**

//Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

const numeros = [1, 2, 3, 4, 5];

function sumarArray(numeros, callback) {
    const suma = numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
    callback(suma);
  }

  sumarArray(numeros, function (resultado) {
    console.log(resultado);
  });