// Resolver los siguientes ejercicios:
// Nota: Cada ejercicio se debe resolver paso a paso y dejarlo
//por escrito hasta dar con el resultado final, tal cual lo vimos en clase.
//hecho por JuliangaDev

//ejercicio #1. 
console.log(true || true || false && true || false && true && true || false) //=true 
//explicacion
true || true// 1.1 true + true = true 
false && true // 1.2 false + ture = false 
false && true && true// 1.3 false + true = false + true = false
false // 1.4 false 
// tendriamos entonces = true || false || false || false
// como tenemos el condicional || (or) si se cumple almenos una condicion se considera verdadera
//por tanto este ejercicio es true


//ejercicio #2. 
console.log(true && (false || false && (true && (true || false && true))) || false && (true || false)) //=false
//explicación
(true || false && true)//2.1 true  || (false + true) = false = true || false = true 
(true && (true || false && true))// 2.2 la anterior fue true por tanto = true && true = true
false && (true && (true || false && true))//2.3 seria = false + 2.2 = false + true = false
(false || false && (true && (true || false && true))) //2.4 seria = false || 2.3 = false || false = false
true && (false || false && (true && (true || false && true)))//2.4 = true && 2.4 = true && false = false
false && (true || false)//2.6 =false && (true || false) = false) = false &&true =false
//entonces tendriamos 
true && false || false// = false || false = false


//ejercicio #3. t
console.log(!(!true && (false || false && !!!true || (true && !false))) || false && true) //true
// explicaición
(true && !false) //3.1 = true && not false = true && true = true 
false && !!!true || (true && !false) //3.2 = false && (not true + true + not true) || (true && not false) = false && false || true = true
!true && (false || false && !!!true || (true && !false)) || false && true//= not true && (3.2) = false && true =false
(!true && (false || false && !!!true || (true && !false))) || false && true// = false || false && true = false || false = false
(!(!true && (false || false && !!!true || (true && !false))) || false && true)//  = !false = true