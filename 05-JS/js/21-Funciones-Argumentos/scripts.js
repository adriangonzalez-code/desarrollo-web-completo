// Funciones

function sumar(numero1 = 0, numero2 = 0) { // Número1, 2 son parámetros
    // Cuerpo de la función
    console.log(numero1 + numero2);
}
sumar(); // Argumentos o los valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1);

const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 16);