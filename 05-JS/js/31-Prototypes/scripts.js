// POO
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Crear funciones que solo se utilizan en un objeto en específico
Producto.prototype.formatearProducto = function () {
    return `El ${this.nombre} tiene un precio de $${this.precio}`;
}

Cliente.prototype.formatearCliente = function () {
    return `El cliente ${this.nombre} ${this.apellido}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const cliente = new Cliente('Adrian', 'Gonzalez');

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());
