
let num10= Number(prompt("Dame un numero"));
let num20= Number(prompt("Dame un segundo numero"));
let operador= prompt("Dame en texto uno de los 4 operadores basicos");

if(operador === "suma"){
  operador= num10 + num20;
  document.write("su suma da " + operador)
}else if(operador === "resta"){
  operador= num10 - num20;
  document.write("su resta es " + operador)
}else if(operador === "multiplicacion"){
  operador= num10 * num20;
  document.write("su multiplicacion es " + operador)
}else if(operador === "division"){
  operador= num10 - num20;
  document.write("su division es " + operador)}
else{document.write("dame valores validos")
     }
