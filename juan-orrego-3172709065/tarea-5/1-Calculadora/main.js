const btnSuma = document.getElementById("suma");
const btnResta = document.getElementById("resta");
const btnMulti = document.getElementById("multipli");
const btnDivi = document.getElementById("division");
//
btnSuma.addEventListener("click", suma);
btnResta.addEventListener("click", resta);
btnMulti.addEventListener("click", multipli);
btnDivi.addEventListener("click", divisi);
//
// Definir las funciones

// Suma

function suma(){
    let onScreen = document.getElementById("onScreen");
    let nMa1 = Number(prompt("Digite el primer número:"));
    let nMa2 = Number(prompt("Digite el segundo número:"));
    let resultadoS = nMa1 + nMa2;
    onScreen.innerHTML = "la suma de " + nMa1 + " + " + nMa2 + " es = " + resultadoS;
}

// Resta

function resta(){
    let onScreen = document.getElementById("onScreen");
    let nMe1 = Number(prompt("Digite el primer número:"));
    let nMe2 = Number(prompt("Digite el segundo número:"));
    let resultadoR = nMe1 - nMe2;
    onScreen.innerHTML = "la resta de " + nMe1 + " - " + nMe2 + " es = " + resultadoR;
}

// Multiplicación

function multipli(){
    let onScreen = document.getElementById("onScreen");
    let nMul1 = Number(prompt("Digite el primer número:"));
    let nMul2 = Number(prompt("Digite el segundo número:"));
    let resultadoM = nMul1 * nMul2;
    onScreen.innerHTML = "la multiplicación de " + nMul1 + " * " + nMul2 + " es = " + resultadoM;
}

// División

function divisi(){
    let onScreen = document.getElementById("onScreen");
    let nDiv1 = Number(prompt("Digite el primer número:"));
    let nDiv2 = Number(prompt("Digite el segundo número:"));
    let resultadoD = nDiv1 / nDiv2;
    onScreen.innerHTML = "la división de " + nDiv1 + " / " + nDiv2 + " es = " + resultadoD;
}

// Made by Juan Diego Orrego. B)