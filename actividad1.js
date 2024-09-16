var alumnos = ["Juan", "María", "Lucía", "Carlos", "Ana", "Luis", "Sofía", "Miguel", "Elena", "Raúl"];

var curso = "Curso de web";

var alumnosConCurso = alumnos.map(nombre => `${curso}: ${nombre}`);

console.log(alumnosConCurso);
 