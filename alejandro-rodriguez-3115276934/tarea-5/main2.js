const persona= {
    nombre:"luis",
    edad:19,
    promedio:8,
    esRegular:true,
    cantidadDeMateriasAprobadas:5,
    esBecado:true,
}
if(persona.edad < 18)
    {console.log("No podras registrarte, no tienes la edad")
    }else if(persona.edad >=18 && persona.promedio < 6){
        console.log("No cumples con el promerio minimo requerido")
    }else if(persona.edad > 18 && persona.promedio >= 6 && persona.esRegular ===false){
        console.log("Debes registrarte como regular")
    }else if( persona.edad > 18 && persona.promedio >= 6 && persona.esRegular ===true && persona.esBecado ===false){
        console.log("Puedes solicitar una beca")
    }else if(persona.edad >=18 && persona.promedio >=6 && persona.esRegular ===true && persona.esBecado ===true){
        console.log("Cumples con todos los requisitos")
    }else{console.log("Hay un error")}
