// Tarea 6 punto 1 calcluladora by Juliangadev
// Hacer un programa que le permita al usuario hacer
//  un cálculo dependiendo de dos valores y de la operación que 
//  ingrese (suma, resta, multiplicación, división). 
//  Si el usuario ingresa los valores 7 y 8 y 
// después ingresa una suma se deben sumar los dos números que ingresó 
// y asi con todas las operaciones aritméticas.

const num1 = Number(prompt("Ingrese el numero 1: "))
const num2 = Number(prompt("Ingrese el numero 2: "))
let operación = Number(prompt("Ingrese el numero de la operacion: (1.suma, 2.resta, 3.multiplicacion, 4.división)"))

if (operación===1 && operación!==2 &&operación!==3 && operación!==4) {
const resultado = num1 + num2
    document.write("el resultado es :", resultado)
}  else if(operación!==1 && operación===2 &&operación!==3 && operación!==4) {
    const resultado2 = num1 - num2
        document.write("el resultado es :", resultado2)
    } else if (operación!==1 && operación!==2 &&operación===3 && operación!==4) {
        const resultado3 = num1 * num2
            document.write("el resultado es :", resultado3)
        } else if (operación!==1 && operación!==2 &&operación!==3 && operación ===4) {
            const resultado4 = num1 / num2
                document.write("el resultado es :", resultado4)
            }
            else{
                document.write("error al ingresar valor")
            }