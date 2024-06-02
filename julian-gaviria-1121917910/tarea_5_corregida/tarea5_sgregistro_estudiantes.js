//Sistema de Gestión de Registro de Estudiantes
let nombre = prompt("ingrese el nombre del estudiante ")
let edad = Number(prompt("ingrese la edad del estudiante"))
let promedio = (Math.random()*10).toFixed(1)  //(number): El promedio de calificaciones del estudiante (0 a 10).
let esRegular =String(prompt("ingrese  si el estudiante esta matriculado como regular o no (s/n) ")) //(boolean): Si el estudiante está registrado como regular.
let cantidadMateriasAprobadas= (Math.random()*10).toFixed(1)//(number): La cantidad de materias aprobadas por el estudiante.
let esBecado= String(prompt("ingrese  si el estudiante tiene beca o no (s/n) "))
//funciones
//funcion mensaje de error
const error = () => {
    document.write("estudiante es menor de edad y no puede registrarse.")
} 
const menor = () => {
    document.write("estudiante es menor de edad y no puede registrarse.")
} 
const solicitar = () => {
    document.write("puede solicitar una beca.")
} 

const minimo = () => {
    document.write(`el estudiante ${nombre} no cumple con el promedio mínimo requerido.`)
}

const regulr = () => {
    document.write(`el estudiante debe registrarse como regular`)
}



function registro () {
    if  (edad >= 18 && promedio > 6 && esRegular == "s" && esBecado == "s") {
        document.write(`el estudiante ${nombre} cumple con todos los requisitos que tiene la edad de ${edad} años y un promedio de ${promedio}`)
    }else if(edad < 18) {
       return menor()
    } else if(edad >= 18 && promedio < 6 ){
        return minimo()
    }else if(edad >= 18 && promedio > 6 && esRegular != "s" ){
        return regulr()
    }else if(edad >= 18 && promedio > 6 && esRegular == "s" && esBecado != "s"){
        return solicitar()
    }else{
        document.write("Ingresaste algún valor mal")
    }
}
registro()
