"use strict";
console.log("Hola desde Node.js.............");
// 2) TypeScript: variables con tipo (anotaciones).
let nombre = "María Torres";
let creditos = 18;
let activo = true;
console.log(nombre, creditos, activo);
// 3) Función tipada: recibe y devuelve tipos declarados.
function saludar(persona) {
    return "Bienvenido/a, " + persona;
}
console.log(saludar(nombre));
const curso = { nombre: "JavaScript Avanzado", creditos: 3 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);
