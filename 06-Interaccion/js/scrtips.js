// querySelector
const heading = document.querySelector('.header__texto h2'); // null o 1 elemento
heading.textContent = "Nuevo Heading";
heading.classList.add('nueva-clase');

console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); // null o n elementos
console.log(enlaces);
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].href = 'https://www.google.com';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('a');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);