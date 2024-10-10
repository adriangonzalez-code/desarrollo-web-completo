// Clases
class Producto {

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El ${this.nombre} tiene un precio de $${this.precio}`;
    }

    getPrecio() {
        return this.precio;
    }
}

const producto1 = new Producto('Monitor Curvo de 49"', 800);
const producto2 = new Producto('Laptop', 300);

console.log(producto1.formatearProducto());
console.log(producto1.getPrecio());
console.log(producto2.formatearProducto());
console.log(producto2.getPrecio());