// Punto 1

// let num1 = Number(prompt("Ingrese el primer número"));
// let signo = prompt("Por favor ingrese el operador");
// let num2 = Number(prompt("Ingrese el segundo número"));
// if (signo === "+") {
//     document.write("El resultado de la suma es ", + num1 + num2);
// } else if (signo === "-") {
//     document.write("El resultado de la resta es ", + num1 - num2);
// } else if (signo === "*") {
//     document.write("El resultado de la multiplicación es ", + num1 * num2);
// } else if (signo === "/") {
//     document.write("El resultado de la división es " , + num1 / num2);
// } else {
//     document.write("por favor escriba valores validos");
// }

//Punto 2

//const nombre = prompt("Ingrese su nombre");
// const edad = Number(prompt("Ingrese su edad"));
// const promedio = 3;
// const esRegular = true;
// const cantidadMarteriasAprobadas = 4;
// const esBecado = true;
// if (nombre < 18){
//     console.log("estudiante menor de edad no puede registrarse");
// }else if(nombre > 18 && promedio < 6) {
//     console.log("estudiante no cumple con el promedio mínimo requerido");
// }else if(nombre > 18 && promedio >= 6 && esRegular === false){
//     console.log("estudiante debe registrarse como regular")
// }else if(nombre > 18 && promedio >= 6 && esRegular === true && esBecado === false){
//     console.log("Estudiante puede solicitar una beca");
// }else if(nombre > 18 && promedio >= 6 && esRegular ===true && esBecado ===true){
//     console.log("estudiante cumple con todos los requisitos");
// }else{
//     console.log("Hay un error");
// }


// Punto 3

// true || true || false && true || false && true && true || false
// true || true || false || false || false
// true || false|| false || false
// true || false|| false
// true || false
// true


//  true &&  (false || false && (true && (true || false && true))) || false && (true || false)
//  true &&  (false || false && ( true && (true && false )))||  false && ( true)
//  true &&  (false || false && (true && (false)))|| false && (true)
//  true && ( false || false && (false))||false
//  true && false && (false) || false
//  false && false
//  false

 
//   !(!true && (false || false && !!!true || (true && !false))) || false && true
//   !(!true && (false || false && !!!true || (true))) || false && true
//   !(!true && (false || false && !!!true || true)) || false && true
//   !(!true && (false || false || true)) || false && true
//   !(!true && (true))||false && true
//   !(!true && true) || false && true
//   ! false || false
//   true || false
//   true

