
function registrar(){
    var nombre = (document.getElementById("id_nombre").value);
    var edad = parseFloat(document.getElementById("id_edad").value);
    var prom = parseFloat(document.getElementById("id_prom").value);
    var regular = (document.getElementById("id_regular")).checked;
    var materias = parseFloat(document.getElementById("id_materias").value);
    var beca = (document.getElementById("id_beca")).checked;
    var txt = "";

    if (edad<18) {txt="Eres menor de edad"}
    else if(edad>=18 && prom<6){txt="No cumples con el promedio"}
    else if(edad>=18 && prom>=6 && regular==false){txt="Debes ser regular"}
    else if(edad>=18 && prom>=6 && regular==true && beca==false){txt="Puedes solicitar una beca"}
    else if(edad>=18 && prom>=6 && regular==true && beca==true){txt="Cumples con todos los  requisitos"}
    else{}

    document.getElementById("id_result").value=txt;
}