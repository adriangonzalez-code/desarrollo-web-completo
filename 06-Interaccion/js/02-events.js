// Eventos

console.log(1);

window.addEventListener('load', function () { // load espera a que el js y los archivos que dependen del HTML estén listos
    console.log(2);
});

window.onload = function () {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () { // solo espera por el HTML, pero no espera CSS o imágenes
    console.log(4);
});

console.log(5);

window.onscroll = function () {
    console.log('scrolling...');
}

// Eventos de los Inputs y TextAreas
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// Seleccionar elementos y asociarles eventos
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
const btnEnviar = document.querySelector('.boton--primario');

/*btnEnviar.addEventListener('click', function (e) {
    e.preventDefault();

    // Validar formulario
    console.log('enviando formulario');
});*/

// Evento Submit
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // Corta la ejecución del código
    }

    // Crear la otra alerta de Enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente');
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;

    console.log(datos);
}

// Muestra un error en pantalla
function mostrarAlerta(mensaje, error = false) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}