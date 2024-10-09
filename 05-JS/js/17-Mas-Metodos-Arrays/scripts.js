// Array Methods
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Television 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// ForEach
meses.forEach(function (mes) {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes
const resultado = meses.includes('Marzo');
const resultado2 = carrito.includes('Celular');
console.log(resultado);
console.log(resultado2);

// Some ideal para arreglo de objetos
const resultado3 = carrito.some(function (producto) {
    return producto.nombre === 'Celular';
});

const resultado4 = carrito.some(producto => producto.nombre === 'Celular');

console.log(resultado3);
console.log(resultado4);

// Reduce
const resultado5 = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado5);

// Filter
const resultado6 = carrito.filter(function (producto) {
    return producto.precio > 400;
});
console.table(resultado6);