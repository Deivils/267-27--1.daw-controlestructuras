console.log("----------------------")
console.log("ESTRUCTURAS DE CONTROL")
console.log("----------------------")

// Estructura de control secuencial

console.log("----------------------")
console.log("     1-Secuencial     ")
console.log("----------------------")

const PI = 3.1416 // Laas constantes suelen escribirse en mayúsculas
let edad = 18
let nombre = "Manolín"

console.log("Hola " + nombre)
console.log("Tienes " + edad + " años.")

console.log("-----------------------")
console.log("2-Condicional/Selectiva")
console.log("-----------------------")


edad = 17


// Simple
    cont2++

if (edad >= 18) {
    console.log("Eres mayor de edad")
}

// Doble

if (edad >= 18){
    /*
    Los corchetes/llaves definen el ámbito, que es el código que se va a ejecutar dentro
    */ 
    console.log("Eres mayor de edad.")
} else {
    console.log("Prohibido el acceso, chaval!")
}

// Múltiple (opción 1)

edad = 7

if (edad <= 6) {
    console.log("Vas Infantil")
} else if (edad <= 9) {
    console.log("Vas a primaria")
} else {
    console.log("Vas a secundaria")
}

// Múltiple (opción 2)
edad = 6

switch(edad){
    case 6:
        console.log("Tienes 6 años")
        break
    case 10:
        console.log("Tienes 10 años")
        break
    default:
        console.log("Eres un viejete")
}

console.log("-------------------------------")
console.log("3-Iterativa/Repetitiva (Bucles)")
console.log("-------------------------------")

// Condición inicial; Condición de salida; Incremento de uno en uno

for(let cont = 0; cont < 100; cont ++){
    console.log("Ejecuto FOR - " + cont)
}

// Condición inicial
let cont2 = 0

// Condición de salida
while (cont2 < 100) {
    console.log("Ejecuto WHILE - " + cont2)
    // Evitamos Bucle Infinito
    // Incremento de uno en uno (cont2 = cont2 +1)
    cont2++
}