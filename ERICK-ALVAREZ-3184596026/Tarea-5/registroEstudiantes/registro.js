let nombre = prompt("Ingresa tu nombre");
let edad = Number(prompt("Ingresa tu edad"));
let promedio = Number(prompt("Ingresa tu promedio"));
let esRegular = true;
let cantidadMateriasAprobadas = Number(prompt("¿Cuantas materias aprobaste"));
let esBecado = false;

if (edad < 18){
    document.write("Hola ",nombre, "no te puedes registrar.")
} else if (edad > 18 && promedio < 6){
    document.write("Hola ",nombre," no cuentas con el promedio minimo requerido.")
} else if (edad >18 && promedio >= 6 && esRegular !== true){
    document.write("Hola ",nombre," debes registrarte como regular.")
} else if(edad > 18 && promedio >= 6 && esRegular == true && esBecado !== true){
    document.write("Hola ",nombre," puedes solicitar una beca.")
} else if (edad > 18 && promedio >= 6 && esRegular == true && esBecado == true){
    document.write("Hola ",nombre," cumples con todos los requisitos.")
}



