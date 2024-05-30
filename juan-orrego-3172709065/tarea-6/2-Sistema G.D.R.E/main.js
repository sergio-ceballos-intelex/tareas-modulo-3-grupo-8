const btnRegistro = document.getElementById("btnRegistro");

const mostrarMensaje = document.getElementById("confirRegistro").style.display = "flex";
const mensaje = mostrarMensaje + 

btnRegistro.addEventListener("click",aggDatos);

function aggDatos(){
    const estudiante = {
        nombre: prompt("Digite su nombre:"),
        edad: Number(prompt("Digite su edad:")),
        prom: Number(prompt("Digite su promedio:")),
        estReg: prompt("¿Eres estudiante regular (si/no)?"),
        materiasAprob: Number(prompt("Digite la cantidad de materias que aprobo:")),
        estBecado: prompt("¿Eres estudiante becado? (si/no)")
    }

    if(estudiante.edad < 18){
        document.getElementById("confirRegistro").style.display = "flex";
        document.getElementById("onScreen").innerHTML = "¡Ups! Eres menor de edad no puedes registrarte.";
    }else if(estudiante.edad >= 18 && estudiante.prom < 6){
        document.getElementById("confirRegistro").style.display = "flex";
        document.getElementById("onScreen").innerHTML = "¡Ups! ¡No cumples cón el promedio requerido!.";
    }else if(estudiante.edad >= 18 && estudiante.prom >= 6 && estudiante.estReg === "no"){
        document.getElementById("confirRegistro").style.display = "flex";
        document.getElementById("onScreen").innerHTML = "¡Debes registrarte como estudiante regular!.";
    }else if(estudiante.edad >= 18 && estudiante.prom >= 6 && estudiante.estReg === "si" && estudiante.estBecado === "no"){
        document.getElementById("confirRegistro").style.display = "flex";
        document.getElementById("onScreen").innerHTML = "¡Puedes solicitar una beca!.";
    }else if(estudiante.edad >= 18 && estudiante.prom >= 6 && estudiante.estReg === "si" && estudiante.estBecado === "si"){
        document.getElementById("confirRegistro").style.display = "flex";
        document.getElementById("onScreen").innerHTML = `Felicidades, ${estudiante.nombre}! Cumples con todos los requisitos. :)<br><br>
        <ul>
          <li>Tienes ${estudiante.edad} años, cumples con la edad mínima.</li>
          <li>Tu promedio es ${estudiante.prom}, cumples con el promedio mínimo.</li>
          <li>Eres un estudiante regular.</li>
          <li>Has aprobado ${estudiante.materiasAprob} materias.</li>
          <li>Eres un estudiante becado.</li>
        </ul>`;
    }else{
        document.getElementById("confirRegistro").style.display = "flex";
        document.getElementById("onScreen").innerHTML = "¡Ups! Digitaste un dato invalido.";
    }
}
