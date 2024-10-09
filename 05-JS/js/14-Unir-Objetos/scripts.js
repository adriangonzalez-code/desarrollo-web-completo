// Objeto
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible : true
};

const medidas = {
    peso: '1Kg',
    medida: '1m'
}

const nuevoProducto = {
    ...producto,
    ...medidas
}

console.log(producto);
console.log(medidas);
console.log(nuevoProducto);