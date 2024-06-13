//- **Callbacks para Filtrar Elementos de un Arreglo:**

//Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro.
  //Ejercicio:

function filtrarArray(array, callback) {
    return array.filter(callback);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArray(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares);