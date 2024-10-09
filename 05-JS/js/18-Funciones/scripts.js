// Funciones

// Declaracion de Función
function sumar() {
    // Cuerpo de la función
    console.log(10 + 10);
}

// Llamar a la función
sumar();

// Expresión de la función
const sumar2 = function () {
    console.log(3 + 3);
}

sumar2();

// IIFE - Se llaman automáticamente
(function () {
    console.log('Esta es una función')
})();