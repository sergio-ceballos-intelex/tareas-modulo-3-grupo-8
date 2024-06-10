let numero1 = Number(prompt("Indica el primer numero"))
let signo = prompt("Indica el signo de la operacion que deseas realizar")
let numero2 = Number(prompt("Indica el segundo numero"))

const calculo = () =>{
  let resultado =
  signo === "+"? numero1 + numero2:
  signo === "-"? numero1 - numero2:
  signo === "*"? numero1 * numero2:
  signo === "/"? numero1 / numero2:
  "Pon un signo de operacion";
document.write("El resultado es ", numero1, signo , numero2 , "=" , resultado )
};
document.write(calculo(), resultado)

// // Punto 2 Tarea 5

    const nombre = "Kevin";
    const edad = 19;
    const promedio = 7;
    const registro = true
    const materias = 0
    const beca = true

if( edad < 18){
    console.log(nombre , ' No puedes registrearte porque eres menor de edad ')
} else if(promedio <6 ){
    console.log(nombre , ' no cumples con el promedio minimo requerido ')
} else if(!registro ){
    console.log(nombre , ' debes registrarte como regular')
} else if( !beca)
    console.log(nombre , 'puedes solicitar una beca')
    else {console.log(nombre , ' Cumples con todos los requisitos ')
    }

// Punto 3 Tarea 5

// Primer punto
true || true || (false && true) || (false && true && true) || false;
// Respuesta :
// true || false = true || false = true || false = true respuesta

//Segundo punto
(true && (false || false(true && (true || (false && true))))) ||
  (false && (true || false));
//Respuesta :
// true ||false  = true respuesta

//tercer punto
!(!true && (false || (false && !!!true) || (true && !false))) ||
  (false && true);
//Respuesta:
// !false || false = true respuesta