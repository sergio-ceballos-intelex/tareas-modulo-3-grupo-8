// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script src="tarea5.js"></script>
// </body>
// </html>

// ##PUNTO 1

// let operacion =prompt("Ingresa la operacion suma , resta, multiplicacion o division):").toLowerCase();
// let number1 = Number(prompt("digita tu primer numero"));
// let number2 = Number( prompt("digita tu segundo numero"));


// if ( operacion === "suma"){
//     operacion = number1 + number2;
//     document.write( "el resultado es " + operacion );
// }else if ( operacion === "resta"){
//     operacion = number1 - number2;
//     document.write( "el resultado es " + operacion );
// }else if ( operacion === "multiplicacion"){
//     operacion = number1 * number2;
//     document.write( "el resultado es " + operacion );
// } else if ( operacion === "division"){
//     operacion = number1 / number2;
//     document.write( "el resultado es " + operacion );
// } else {
//     alert( "opercion fallida");
// }     

// // let nombre = prompt("nombre del estudiante");
// // let edad = Number(prompt("edad del estudiante"));
// // let promedio =Number(prompt("promedio de calificaciones 1 a 10"));
// // let esRegular = true(prompt("es regular"));
// // let esBecado = true(prompt("es becado"));
// // let cantidadDeMateriasAprobadas = Number(prompt("materias aprobadas"));

// // if (edad < 18){
//     document.write("Estudiante menor de edad.No puede registrarse");
// }else if(edad >18 && promedio < 6){
//     document.write("El estudiante no cumple con el promedio mínimo requerido");
// }else if(edad > 18 && promedio >= 6 && esRegular){
//     document.write("El estudiante debe registrarse como regular");
// }else if(edad > 18 && promedio >= 6 && esRegular && !esBecado){
//     document.write("El estudiante puede solicitar una beca");
// }else if (edad > 18 && promedio >= 6 && esRegular  && esBecado){
//     document.write("El estudiante cumple con todos los requisitos");
// }    else{
//     document.write("Sin datos");
// }
// ##PUNTO2

// const nombre = "Juan"
// const edad = 19;
// const promedio = 7;
// const esRegular = true;
// const cantidadMarteriasAprobadas = 4;
// const esBecado = false;
// if (edad < 18){
//     console.log("estudiante menor de edad no puede registrarse");
// }else if (edad > 18 && promedio < 6) {
//     console.log("estudiante no cumple con el promedio mínimo requerido");
// }else if (edad > 18 && promedio >= 6 && esRegular ){
//     console.log("estudiante debe registrarse como regular")
// }else if (edad > 18 && promedio >= 6 && esRegular && esBecado ){
//     console.log("Estudiante puede solicitar una beca");
// }else if (edad > 18 && promedio >= 6 && esRegular && esBecado){
//     console.log("estudiante cumple con todos los requisitos");
// }else{
//     console.log("Hay un error");
// }

// ##PUNTO 3
// operadores logicos


// a .**true || true || false && true || false && true && true || false**
// Rta.
// false ||false||true|| false
// false||true
// true
//      5              3              2              1                   6            4
// b .**true && (false || false && (true && (true || false && true))) || false && (true || false)**

//    1     2                      3       4                  5      6                                          
//  true ||true =  true          false ||true = true        true|| false = true

// true||true ||true = true


//         4          3             2                    1                 5          
// c.**!(!true && (false || false && !!!true || (true && !false))) || false && true**

//   1       2          3       4                                                
//  !(true || false || false || false)
//               5
//  !(true) || false = false