// String - Cadenas de caracteres
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo";
const producto2 = "Monitor HD";

console.log(tweet.length);
console.log(producto2);

// IndexOf - Te dice en que posición se encuentra un texto que estoy buscando (cuando es un número mayor a 0 es porque encontró, cuando retorna -1 es porque no lo encontró)
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));

// Includes (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));