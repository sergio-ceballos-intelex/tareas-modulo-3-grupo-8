// Ubicar el boton y añadir evento
const btnRegistro = document.getElementById("btnRegistro");
btnRegistro.addEventListener("click",aggDatos);

// Funcion para mostrar en pantalla resultado de registro
function mensaje(texto){
    document.getElementById("confirRegistro").style.display = "flex";
    document.getElementById("onScreen").innerHTML = texto;
    return texto;
}

// Funcion para agregar datos del estudiante
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
        mensaje("¡Ups! Eres menor de edad no puedes registrarte.");
    }else if(estudiante.edad >= 18 && estudiante.prom < 6){
        mensaje("¡Ups! ¡No cumples cón el promedio requerido!.");
    }else if(estudiante.edad >= 18 && estudiante.prom >= 6 && estudiante.estReg === "no"){
        mensaje("¡Debes registrarte como estudiante regular!.");
    }else if(estudiante.edad >= 18 && estudiante.prom >= 6 && estudiante.estReg === "si" && estudiante.estBecado === "no"){
        mensaje("¡Puedes solicitar una beca!.");
    }else if(estudiante.edad >= 18 && estudiante.prom >= 6 && estudiante.estReg === "si" && estudiante.estBecado === "si"){
        mensaje(`Felicidades, ${estudiante.nombre}! Cumples con todos los requisitos. :)<br><br>
        <ul>
          <li>Tienes ${estudiante.edad} años, cumples con la edad mínima.</li>
          <li>Tu promedio es ${estudiante.prom}, cumples con el promedio mínimo.</li>
          <li>Eres un estudiante regular.</li>
          <li>Has aprobado ${estudiante.materiasAprob} materias.</li>
          <li>Eres un estudiante becado.</li>
        </ul>`);
    }else{
        mensaje("¡Ups! Digitaste un dato invalido.");
    }
}