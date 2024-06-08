const mensaje = (num) => {
    console.log("");
    console.log(`---Punto ${num}---`);
}

// Punto 1 Callbacks en Manejo de Datos:
mensaje(1);
const numeros = [1, 2, 3, 4, 5];

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
        if (callback(element)) {
            newArray.push(element);
        }
    })
    return newArray;
}

const numPares = arrFiltred(numeros, (par) => par % 2 === 0);
console.log(numPares);
mensaje(3);

// Punto 3 Callbacks: Filtrar Números Pares.
const newNumbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const filtrarPares = (arreglo, callback) => {
    const newArray = arreglo.filter(num => num % 2 === 0);
    callback(newArray);
}

const mostrarPares = (newArray) => console.log(newArray);

filtrarPares(newNumbers, mostrarPares);
mensaje(4);

// Punto 4 Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur
console.log("Estoy en Bogota");
const inBogToMadrid = (callback) => {
    setTimeout(() => {
        console.log("Estoy en Bogota - Madrid, me demoré 7 horas");
        console.log("Llegué a Madrid");
        callback()
    }, 7000);
}

const inMadridToFrank = (callback) => {
    setTimeout(() => {
        console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas")
        console.log("Llegué a Frankfurt")
        callback()
    }, 2000);
}

const inFrankToSeul = (callback) => {
    setTimeout(() => {
        console.log("Vuelo Frankfurt - Seul, me demoré 10 horas")
        callback();
    }, 10000);
}

inBogToMadrid(()=> {
    inMadridToFrank(()=> {
        inFrankToSeul(()=>{
            console.log("llegue a Seul.");
        });
    });
});