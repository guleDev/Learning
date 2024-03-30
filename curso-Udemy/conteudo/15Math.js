console.log(100 / 0) // infinity

let num1 = 9.54578;
console.log(num1 ** (1/2))
console.log(num1 ** 0.5)

let num2 = Math.floor(num1); // arredonda para baixo = 10
num2 = Math.ceil(num1); // arredonda para cima = 9
num2 = Math.round(num1); // arredonda para o mais próximo = 10
console.log(num2)

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)) // 1500
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)) // -50

let aleatorio = Math.random() *(10-5) + 5; // numero aleatorio entr 10 e 5
console.log(aleatorio)
console.log(Math.PI) // PI 3,14
console.log(Math.pow(2, 10)) // 2**10 // Potencia
