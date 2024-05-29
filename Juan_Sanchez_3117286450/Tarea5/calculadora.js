function calcular() {
    // Obtener los valores del usuario
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let operacion = prompt("Ingresa la operación a realizar (suma, resta, multiplicacion ó division):").toLowerCase();
    let resultado;

    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
                alert("Error: División por cero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    alert("El resultado de la " + operacion + " es: " + resultado);
}