// Primer punto

let numberUser = Number(prompt("Escribe el primer numero para tu operacion"));
let operationUser = prompt("Escribe el signo de tu operacion");
let numberUser2 = Number(prompt("Escribe el segundo numero para tu operacion"));
const saveCalculadora = () => {
  let resultado =
    operationUser === "+"
      ? numberUser + numberUser2
      : operationUser === "-"
      ? numberUser - numberUser2
      : operationUser === "x"
      ? numberUser * numberUser2
      : operationUser === "/"
      ? numberUser / numberUser2
      : "Pon un signo de operacion";
  document.write(
    "<h3>El resultado de tu operacion es </h3>",
    "<br>",
    numberUser,
    operationUser,
    numberUser2,
    "=",
    resultado
  );
};

// segundo punto

const nombreEstudiante = "Miguel";
const edad = 19;
const promedio = 7;
const esRegular = true;
const cantidadMateriasAprobadas = 6;
const esBecado = false;

if (edad < 18) {
  console.log("Usted es menor de edad, no puede registarse");
} else if (edad > 18 && promedio < 6) {
  console.log("Usted no cumple con el promedio minimo requerido ");
} else if (edad > 18 && promedio >= 6 && !esRegular) {
  console.log("Usted debe registrarse como regular");
} else if (edad > 18 && promedio >= 6 && esRegular && !esBecado) {
  console.log("Usted puede solicitar una beca");
} else if (edad > 18 && promedio >= 6 && esRegular && esBecado) {
  console.log("Usted cumple con todos los requisitos");
}

// tercer punto
// profe si se ve algun parentesis de mas es por la extension de prettier que cuando guarde, me puso automaticamente los parentesis

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
