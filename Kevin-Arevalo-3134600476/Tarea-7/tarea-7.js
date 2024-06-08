//Punto 1 Tarea 7
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
const poductoS = productos.filter(productos => productos.stock > 0);
console.log(poductoS);

const nombreP = productos.map(NPD => NPD.nombre);
console.log(nombreP);

const calculo = productos.map(productos => productos.precio); 

let sumaDePrecio = 0;
for (let s = 0; s < calculo.length; s++) {
    sumaDePrecio += calculo[s];
    
}
console.log("Suma de precios", sumaDePrecio)


//Punto 2 Tarea 7

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log (estudiantes[1].nombre);
estudiantes[0].edad =25;
console.log (estudiantes[0]);

//Punto 3 Tarea 7

const edades = estudiantes.map(estudiante => estudiante.edad);

let calculoEdades = 0;
for (let i = 0; i < edades.length; i++) {
    calculoEdades += edades[i];
    

}
const promedio = calculoEdades / estudiantes.length;
console.log ('suma de edades',calculoEdades);
console.log("Promedio de edades", promedio.toFixed(2));

//Punto 4 Tarea 7

const estudiantes2 = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
      genero: "Femenino",
      carrera: "Ingeniería Civil",
      ciudad: "Bogotá",
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
      genero: "Masculino",
      carrera: "Medicina",
      ciudad: "Medellín",
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
      genero: "Femenino",
      carrera: "Administración de Empresas",
      ciudad: "Cali",
    },
    {
      nombre: "Pedro",
      edad: 23,
      promedio: 82,
      genero: "Masculino",
      carrera: "Derecho",
      ciudad: "Barranquilla",
    },
    {
      nombre: "Laura",
      edad: 24,
      promedio: 88,
      genero: "Femenino",
      carrera: "Arquitectura",
      ciudad: "Cartagena",
    },
    {
      nombre: "Carlos",
      edad: 20,
      promedio: 75,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre: "Sofía",
      edad: 22,
      promedio: 95,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
  ];
  const promedioMasAlto = Math.max(...estudiantes2.map(estudiantes2=> estudiantes2.promedio));
  const promedioMasAlto2 = estudiantes2.filter(estudiantes2 => estudiantes2.promedio === promedioMasAlto );
  console.log("Promedio mas alto", promedioMasAlto2)

  const estudiantesMayores = estudiantes2.filter (estudiantes2 => estudiantes2.edad > 20,)
  console.log ( "Estudiantes mayores de 20 Años", estudiantesMayores)


