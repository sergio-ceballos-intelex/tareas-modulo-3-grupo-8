//Ejercicio 1 - Tarea 5 ******************************************************************************************************************

const numberA = Number(prompt("Ingrese un numero: "));
const numberB = Number(prompt("Ingrese otro numero: "));
const operacion = prompt("Ingrese la Operacion a realizar con ambos numeros: ");
if (operacion==="suma"||operacion==="SUMA"){
  document.write("El resultado es: ",numberA+numberB);
}
else if (operacion==="resta"||operacion==="RESTA"){
   document.write("El resultado es: ",numberA-numberB);
}
else if (operacion==="MULTIPLICACION"||operacion==="multiplicacion"){
   document.write("El resultado es: ",numberA*numberB);
}
else if (operacion==="DIVISION"||operacion==="division"){
   document.write("El resultado es: ",numberA/numberB);
}

//Ejercicio 2 - Tarea 5 *******************************************************************************************************************

const nombre = prompt("Ingrese su nombre: ");
const edad = Number(prompt("Ingrese su edad: "));
const promedio = parseFloat(prompt("Ingrese su promedio de notas de 0 a 10: "));
const esRegular = prompt("Es un estudiante Regular? (si/no): ")
const cantidadMateriasAprobadas = Number(prompt("¿Cuantas materias aprobaste: ?"));
const esBecado = prompt("Es un estudiante becado? (si/no): ")

if (edad < 18){
    document.write("Hola ",nombre,"eres menor de edad y no te puedes registrar.")
} else if (edad >= 18 && promedio < 6){
   document.write("Hola ",nombre," no cuentas con el promedio minimo requerido.")
} else if (edad >=18 && promedio >= 6 && (esRegular == "no"||esRegular == "NO"||esRegular == "No")) {
    document.write("Hola ",nombre," debes registrarte como regular.")
} else if(edad >= 18 && promedio >= 6 && (esRegular=="si"||esRegular =="SI"||esRegular =="Si")&&(esBecado=="no"||esBecado=="No"||esBecado=="NO")){
    document.write("Hola ",nombre," puedes solicitar una beca.")
} else if (edad >= 18 && promedio >= 6 && (esRegular=="si"||esRegular =="SI"||esRegular =="Si") && (esBecado=="Si"||esBecado=="SI"||esBecado=="si")){
    document.write("Hola ",nombre," cumples con todos los requisitos.")
}

//**Ejercicio 3-Tarea5  ***************************************************************************************************************

/*

1.  true || true || false && true || false && true && true || false ;

Solucion:

 true || true || false && true || false && (true&&true) || false
 true || true || false && true || false && true || false
 true || true || false && true || false && (true || false)
 true || true || false && true || (false && true)
 true || true || (false && true) || false
 true || true || false || false
 true || true || (false || false)
 true || true || false
 true || (true || false)
 true || true

 Respuesta= true

 2) true && (false || false && (true && (true || false && true))) || false && (true || false)

 Solucion: 

 true && (false || false && (true && (true || false && true))) || false && (true || false)
 true && (false || false && (true && (true || false && true))) || (false && true)
 true && (false || false && (true && (true || (false && true)))) || false
 true && (false || false && (true && (true || false))) || false
 true && (false || false && (true && (true || false))) || false
 true && (false || false && (true && true)) || false
 true && (false || (false && true))|| false
 true && (false || false)|| false
 true && (false|| false)
 true && false

 Respuesta=false

 3) !(!true && (false || false && !!!true || (true && !false))) || false && true;

 Solucion:

 !(!true && (false || false && !!!true || (true && !false))) || false && true
 !(false && (false || false && false || (true && true))) || false && true
 !(false && (false || false && false || true)) || (false && true)
 !(false && (false || false && false || true)) || false
 !(false && (false || false && (false || true))) || false
 !(false && (false || (false && true))) || false
 !(false && (false || false)) || false
 !(false && false) || false
 !(false) || false
 true || false

Respuesta=true

*/
