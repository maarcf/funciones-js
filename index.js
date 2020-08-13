// Funciones

// Ejercicio 1
//SUMA

const sumar = (num1, num2) => num1 + num2
console.log(sumar(2, 3)) // 5
console.log(sumar(1.2, 3.4)) // 4.6
console.log(sumar(3, -5)) // -2


// Ejercicio 2
// RESTA
const restar = (num1, num2) => num1 - num2
console.log(restar(3, 2)) // 1
console.log(restar(10, 5.5)) // 4.5 
console.log(restar(3, 5)) // -2


// Ejercicio 3
// MULTIPLICACIÓN
const mutiplicar = (num1, num2) => num1 * num2
console.log(mutiplicar(2, 3)) 
console.log(mutiplicar(4, 0.5)) 


// Ejercicio 4
// DIVISIÓN
const dividir = (num1, num2) => num1 / num2
console.log(dividir(6, 2))  
console.log(dividir(100, 5)) 
console.log(dividir(49, 7)) 


// Ejercicio 5
const calcularAreaTriangulo = (base, altura) => (base * altura) / 2
console.log(calcularAreaTriangulo(3, 4)) // 6
console.log(calcularAreaTriangulo(5, 6)) // 15


// Ejercicio 6
//let mensajeAGritar = prompt("¿Qué desea gritar hoy?")
const gritar = loQueGrita => `¡${loQueGrita}!`
//console.log(gritar(mensajeAGritar)) 
console.log(gritar('Karinaaaaaaaaaa'))


// Ejercicio 7
const obtenerNombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`
console.log(obtenerNombreCompleto("Mariana", "Cairo"))


// Ejercicio 8
const saludar = nombre => `Hola ${nombre}, un gusto que estés acá`
console.log(saludar(obtenerNombreCompleto("M", "C")))


// Ejercicio 9
const saludarGritando = (nombre, apellido) => {
  let saludoConNombrePersona = saludar(obtenerNombreCompleto(nombre, apellido))
  return gritar(saludoConNombrePersona)
}
console.log(saludarGritando("Lisa", "Simpson"))
