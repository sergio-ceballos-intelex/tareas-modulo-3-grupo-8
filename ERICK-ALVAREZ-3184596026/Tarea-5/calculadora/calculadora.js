let num1 = Number(prompt("Ingresa tu primer numero"));
let num2 = Number(prompt("Ingresa tu segundo numero"));
let op = prompt("¿Que quieres hacer con estos dos numeros?").toUpperCase();


if(op == 'SUMA'){
    result = num1 + num2
    document.write("Tu resultado es: ",result);
} else if (op == 'RESTA'){
    result = num1 - num2
    document.write("Tu resultado es: ",result);
} else if (op == 'DIVISION'){
    result = num1 / num2
    document.write("Tu resultado es: ",result);
} else if (op == 'MULTIPLICACION'){
    result = num1 * num2
    document.write("Tu resultado es: ",result);
} else if (op != String) {
    document.write("Incorrecto")
}


