"use strict" // Habilitar el correr JS en modo estricto

// Objeto
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible : true
};

// Congela el objeto para evitar que se pueda modificar (agregar o eliminar propiedades o cambiar valores de las propiedades)
// Object.freeze(producto);

// Igual que el freeze, pero, si permite modificar los valores de las propiedades existentes
Object.seal(producto);

// producto.imagen = "imagen.jpg";
delete producto.precio;

console.log(Object.isFrozen(producto));

console.log(producto);