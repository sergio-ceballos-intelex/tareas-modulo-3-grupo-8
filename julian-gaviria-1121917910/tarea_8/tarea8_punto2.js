//Tarea 8:Callbakcs
//coded By Julian Gaviria= Juliangadev

/* 
Punto 8.2. Callbacks para Filtrar Elementos de un Arreglo:

Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:


*/
function filtrarArreglo(arreglo, callbackFiltro) {
  const numerosPares = arreglo.filter(numero => numero % 2 === 0) 
  callbackFiltro(numerosPares)
}

const numeros = [1, 2, 3, 4, 5];
; // Debería imprimir [2, 4]
filtrarArreglo(numeros, function(arrayresult){
  console.log(`Los numeros pares son ${arrayresult}`)
})
  