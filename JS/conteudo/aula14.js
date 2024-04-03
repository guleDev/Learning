let num1 = 1;
let num2 = 2.5;

console.log(num1.toString(), typeof(num1.toString())) // Transforma em string

num1 = 1500;
console.log(num1.toString(2)) // Transforma em binário

num1 = 10.5789551255547;
console.log(num1.toFixed(2)) // Arredonda o numero

num1 = 10;
console.log(Number.isInteger(num1)) // True(inteiro) ou False(flutuante)

console.log(Number.isNaN()) // True(Não deu erro) ou False(Deu erro)