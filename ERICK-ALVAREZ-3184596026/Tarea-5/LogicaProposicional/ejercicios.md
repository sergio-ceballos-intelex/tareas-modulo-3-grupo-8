## Primer ejercicio
true || true || false && true || false && true && true || false  
true || true ||  false || false || false  
true || false || false  
true  

## Segundo ejercicio
true && (false || false && (true && (true || false && true))) || false && (true || false)  
true && (false || false && (true && true)) || false && (true)  
true && (false || false && true) || false && true  
true && false || false && true  
false || false  
false
   

## Tercer ejercicio
!(!true && (false || false && !!!true || (true && !false))) || false && true  
!(!true && (false || false && !!!true || true)) || false && true  
!(!true && true) || false && true  
!(false) || false && true  
!false || false && true  
true