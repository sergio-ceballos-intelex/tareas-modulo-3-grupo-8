//Ejercicio 1 - Impresion de numeros en Pantalla del 1 al 50******************************************************************************

let myArray1=[];

for (i=1;i<=50;i++){
    const num1=i;
    myArray1.push(num1);
}

console.log("Numeros del 1 al 50: ",myArray1);

//Ejercicio 2 - Impresion de numeros en Pantalla del 1 al 2000****************************************************************************

let myArray2=[];

for (j=1;j<=2000;j++){
    const num2=j;
    myArray2.push(num2);
}

console.log("Numeros del 1 al 2000: ",myArray2);


//Ejercicio 3 - Impresion de numeros entre 1 a 2000 Pero con la condicion de solo los que inician con 2 ***********************************

for(let i=1;i<=2000;i++){
    const numero=i;
        if(numero.toString().startsWith('2')){
         console.log(numero);
        }
}
