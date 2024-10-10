// Arrow Functions
const sumar2 = (n1, n2) => console.log(n1 + n2);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

sumar2(5, 10);
aprendiendo('JavaScript');

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
meses.forEach(mes => {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Some ideal para arreglo de objetos
const resultado3 = carrito.some(producto =>  producto.nombre === 'Celular');

console.log(resultado3);

// Reduce
const resultado5 = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado5);

// Filter
const resultado6 = carrito.filter(producto => producto.precio > 400);
console.table(resultado6);

const resultado7 = carrito.filter(producto => producto.nombre !== 'Celular');
console.table(resultado7);