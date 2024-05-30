let operacion =prompt("Ingresa la operacion suma , resta, multiplicacion o division):").toLowerCase();
let number1 = Number(prompt("digita tu primer numero"));
let number2 = Number( prompt("digita tu segundo numero"));


if ( operacion === "suma"){
    operacion = number1 + number2;
    document.write( "el resultado es " + operacion );
}else if ( operacion === "resta"){
    operacion = number1 - number2;
    document.write( "el resultado es " + operacion );
}else if ( operacion === "multiplicacion"){
    operacion = number1 * number2;
    document.write( "el resultado es " + operacion );
} else if ( operacion === "division"){
    operacion = number1 / number2;
    document.write( "el resultado es " + operacion );
} else {
    alert( "opercion fallida");
}          
