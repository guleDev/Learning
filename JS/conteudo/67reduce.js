// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(soma);

const pares = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor% 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(pares);

const dobro = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor*2);
    return acumulador;
}, []);
console.log(dobro);

// Retorne a pessoa mais velhas
const pessoa = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 10},
    {nome: "Rosana", idade: 64},
    {nome: "Wallace", idade: 63}
];

const maisVelhas = pessoa.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelhas)
