// Herencia
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El ${this.nombre} tiene un precio de $${this.precio}`;
    }

    obtenerPrecio() {
        return this.precio;
    }
}

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }
}

const producto1 = new Producto('Monitor Curvo de 49"', 800);
const producto2 = new Producto('Laptop', 300);

const libro = new Libro('JavaScript, la revolución', 120, '6814641341434');

console.log(producto1.formatearProducto());
console.log(producto1.obtenerPrecio());
console.log(producto2.formatearProducto());
console.log(producto2.obtenerPrecio());

console.log(libro);
console.log(libro.formatearProducto());