// segundo punto 
const name='carlos';
const years=20;
const nota= 8;
const regular= true;
const numberaprobo= 6;
const veca= false; 
if (years <=18){
    console.log('NO TIENE EDAD PARA ENTRAR');
}else if (years >18 &&nota<= 7) {
console.log('NO CUMPLE CON EL PROMEDIO NECESARIO');
    } else if (years >18 &&nota< 7&& !regular){
        console.log('DEBE REGISTRARSE COMO REGULAR');
    }else if (years >18 &&nota< 7 && regular && !veca){
        console.log('TIENE DERECHO A VECA');
    }else if (years >18 &&nota< 7 && regular&& veca){
        console.log('CUMLE CON LOS REQUISITOS');
    };

   


// // tercer punto

// true || true || (false && true) || (false && true && true) || false;
// // true,false,false, false 
// // true,false,false,

// //al final es true

// (true && (false || false(true && (true || (false && true))))) ||
//   (false && (true || false));
// // true, false, true, true,false false, ture
// //true, false, true, true,false
// //true, false, true, false
// // true,true,false
// //true, false 

// //al final es false

// !(!true && (false || (false && !!!true) || (true && !false))) ||
//   (false && true);
// //false,false,false,true,false
// //false, true,false
// // false, false
// //false

// //al final es true 

