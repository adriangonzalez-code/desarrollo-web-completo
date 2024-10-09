// Arrays
const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

const arreglo = ['Hola', 10, true, "si", null, {nombre : 'Adrian', trabajo: 'Programador'}, [1,2,3]];
console.log(arreglo);

// Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[100]); // Undefined

// Conocer la extensión de un arreglo
console.log(meses.length);

meses.forEach(function(mes) {
    console.log(mes);
});