function verificacionDatos() {
   // Solicitar datos del estudiante
   let nombre = prompt("Digite el nombre del estudiante:");
   let edad = parseInt(prompt("Digite la edad del estudiante:"));
   let promedio = parseFloat(prompt("Digite el promedio del estudiante (de 0 a 10):"));
   let esRegular = confirm("¿El estudiante está registrado como regular? | Elija 'Aceptar' si registra como regular, ó elija 'Cancelar' en caso contrario");
   let cantidadMateriasAprobadas = parseInt(prompt("Digite la cantidad de materias aprobadas por el estudiante:"));
   let esBecado = confirm("¿El estudiante tiene beca? | Elija 'Aceptar' si registra como regular, ó elija 'Cancelar' en caso contrario");

   // Verificar condiciones y mostrar mensajes
   if (edad <= 18) {
      alert("El estudiante es menor de edad y no puede registrarse.");
   } else if (promedio < 6) {
      alert("El estudiante no cumple con el promedio requerido.");
   } else if (!esRegular) {
      alert("El estudiante debe registrarse como regular.");
   } else if (promedio >= 6 && esRegular && !esBecado) {
      alert("El estudiante puede solicitar una beca.");
   } else if (promedio >= 6 && esRegular && esBecado) {
      alert("El estudiante cumple con todos los requisitos.");
   } else {
      alert("Error, por favor revisa los datos digitados.");
   }
};