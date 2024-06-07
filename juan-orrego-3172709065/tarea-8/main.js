const mensaje = (num) => {
    console.log("");
    console.log(`---Punto ${num}---`);
}

// Punto 1 Callbacks en Manejo de Datos:
mensaje(1);
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumarArreglo = (arreglo, callback) => {
    // let sumArray = numeros.reduce((total,numeros) => total + numeros, 0);
    let suma = 0;
    arreglo.forEach(element => {
        suma += element;
    });
    callback(suma);
};

sumarArreglo(numeros, (resultado) => console.log(resultado)); // (Debería imprimir 15, como agregue números hasta el 10 cambia el valor a 55);
mensaje(2);

// Punto 2 Callbacks para Filtrar Elementos de un Arreglo.
const arrFiltred = (arreglo, callback) => {
    let newArray = [];
    arreglo.forEach(element => {
        if(callback(element)){
            newArray.push(element);
        }
    })
    return newArray;
}

const numPares = arrFiltred(numeros, (par) => par % 2 === 0);
console.log(numPares);