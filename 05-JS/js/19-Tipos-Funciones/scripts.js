// Funciones

sumar();

function sumar() {
    // Cuerpo de la función
    console.log(10 + 10);
}

sumar2(); // Este marcaría un error
const sumar2 = function () {
    console.log(3 + 3);
}