//1. calculadora
let n1 = 2
let n2 = 3
let operador = "multiplicacion";
let operacion;

if(operador === "suma"){
    operacion = n1 + n2;
}else if(operador === "resta"){
    operacion = n1 - n2;
}else if(operador === "multiplicacion"){
    operacion = n1 * n2;
}else if(operador === "division" && n2 !== 0){
    operacion = n1 / n2;
}else {
    console.log("no es posible dividir por cero")
}
console.log("El resultado es: ", operacion)

//2. sistema de gestion de registro de estudiantes
const nombre = "Arit Martinez";
const edad = 20;
const promedio = 7;
const esRegular = true;
const cantidadMateriasAprobadas = 6;
const esBecado = true;

function gestionDeRegistro(nombre,edad,promedio,esRegular,cantidadMateriasAprobadas,esBecado){
    if(edad < 18){
        console.log("El estudiante", nombre, "es menor de edad y no puede registrarse")
    } else if(promedio < 6){
        console.log("El estudiante", nombre, "no cumple con el promedio minimo requerido")
    } else if(esRegular != true){
        console.log("El estudiante", nombre, "debe registrarse como regular")
    }else if(esBecado != true){
        console.log("El estudiante", nombre, "puede solicitar una beca")
    }else{
        console.log("El estudiante", nombre, "cumple con todos los requisitos")
    }
}
let resultado = gestionDeRegistro(nombre,edad,promedio,esRegular,cantidadMateriasAprobadas,esBecado);

// El punto 3 esta en el README.md que esta en esta misma carpeta disculpe las molestias.