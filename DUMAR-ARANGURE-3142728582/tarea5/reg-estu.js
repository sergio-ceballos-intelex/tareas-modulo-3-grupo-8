// let nombre = prompt("nombre del estudiante");
// let edad = Number(prompt("edad del estudiante"));
// let promedio =Number(prompt("promedio de calificaciones 1 a 10"));
// let esRegular = true(prompt("es regular"));
// let esBecado = true(prompt("es becado"));
// let cantidadDeMateriasAprobadas = Number(prompt("materias aprobadas"));

// if (edad < 18){
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


const nombre = "Juan"
const edad = 19;
const promedio = 7;
const esRegular = true;
const cantidadMarteriasAprobadas = 4;
const esBecado = false;
if (edad < 18){
    console.log("estudiante menor de edad no puede registrarse");
}else if (edad > 18 && promedio < 6) {
    console.log("estudiante no cumple con el promedio mínimo requerido");
}else if (edad > 18 && promedio >= 6 && esRegular ){
    console.log("estudiante debe registrarse como regular")
}else if (edad > 18 && promedio >= 6 && esRegular && esBecado ){
    console.log("Estudiante puede solicitar una beca");
}else if (edad > 18 && promedio >= 6 && esRegular && esBecado){
    console.log("estudiante cumple con todos los requisitos");
}else{
    console.log("Hay un error");
}