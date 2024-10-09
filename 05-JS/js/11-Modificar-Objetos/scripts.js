// Objeto
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible : true
};

console.log(producto);

// Agregar nuevas propiedades
producto.imagen = "imagen.jpg";

console.log(producto);

// Eliminar propiedades
delete producto.disponible;

console.log(producto);