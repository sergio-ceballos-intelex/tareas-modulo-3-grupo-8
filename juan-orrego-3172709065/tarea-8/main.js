const mensaje = (num) => {
    console.log("");
    console.log(`---Punto ${num}---`);
}

// Punto 1 Callbacks en Manejo de Datos:
mensaje(1);
const numeros = [1, 2, 3, 4, 5];

function sumarArreglo(arreglo, callback){
    // let sumArray = numeros.reduce((total,numeros) => total + numeros, 0);
    let suma = 0;
    arreglo.forEach(element => {
        suma += element;
    });
    callback(suma);
};

sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
});