// Arrays
const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

numeros[2] = 90;
numeros[5] = 60;
numeros[6] = 70;
console.table(numeros);

// Agrega elementos al final del arreglo
numeros.push(80, 100, 155);
console.table(numeros);

// Agrega elementos al inicio del arreglo
numeros.unshift(-10, -20, -30);
console.table(numeros);

meses.pop(); // Elimina el ultimo elemento del arreglo
meses.shift(); // Elimina el primer elemento del arreglo
meses.splice(1, 1); // Elimina elementos del arreglo
console.table(meses);

// Mejor maneja de modificar arreglos: Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio'];
console.table(nuevoArreglo);