// crea una funcion que tome un arreglo de numeros y un callback , y llame al callback con el resultado de sumar todos los numeros
// del arreglo
const numbers = [1,2,3,4,5];
const sumaArreglo = (arrayNumbers, callback)=>{
    let saveSuma = 0
    arrayNumbers.forEach(number => {
        saveSuma += number
    });
    callback(saveSuma)
}

sumaArreglo(numbers, function (resultado){
    console.log(resultado);
});


// crea una funcion que tome un arreglo y un callback de filtro, y devuelva un arreglo con los elementos que pasan el filtro. \
const filtrarArreglo = (arrayPeoples, callbackFiltro)=>{
    let namesStarstWhitP = arrayPeoples.filter((nombre)=> nombre.startsWith('P'));
    callbackFiltro(namesStarstWhitP)
}
const people = ['Miguel','Pedro','Pablo', 'Juan'];
filtrarArreglo(people, function (resultado) {
    console.log(resultado)
});



// Crea una funcion en JavaScript que filtre los numeros pares de un array y utilicen un callback para manejar el resultado 
const filterPares = (arrayNumbers, callback)=>{
     let numerosPares = arrayNumbers.filter((number)=> number % 2 === 0)
    callback(numerosPares);
}
const mostrarPares= (numerosPares)=> {
    console.log(numerosPares)
};
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterPares(numeros, mostrarPares)

// callback asincrono: 
// hacer un programa que simule un vuelo desde colombia hasta corea del sur respetando el orden de los vuelos;
const vueloBogotaMadrid = (callback)=> {
    console.log('Estoy en Bogota');
    setTimeout(()=>{
        console.log('Vuelo Bogota - Madrid, me demore 7 horas');
        callback()
    } , 7000);
};
const vueloMadridFrankfurt = (callback)=> {
    console.log('llegue a madrid');
    setTimeout(()=>{
        console.log('Vuelo Madrid -Frankfurt, me demore 2 horas');
        callback()
    } ,2000)
};
const vueloFrankfurtSeul = ()=> {
    console.log('Llegue a Frankfurt');
    setTimeout(()=>{
        console.log('Vuelo Frankfurt - Seul me demore 10 horas');
        console.log('Llegue a seul');
    } , 10000);
}
// vueloBogotaMadrid(()=>vueloMadridFrankfurt(vueloFrankfurtSeul));
vueloBogotaMadrid( ()=>{
    vueloMadridFrankfurt(()=>{
        vueloFrankfurtSeul()
    });
});