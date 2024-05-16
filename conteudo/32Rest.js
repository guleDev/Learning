/*let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c)*/

// ... rest (pega o resto), ... spread

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, terceiroNumero, , quintoNumero, ...resto] = numeros;

// Atribuição via desestruturação (Array)
console.log(primeiroNumero, segundoNumero, terceiroNumero, quintoNumero)
console.log(resto)