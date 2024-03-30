// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor*2);
console.log(numerosEmDobro);

// Retorne apenas uma string com o nome da pessoa
// Remova a chave "nome" do objeto
// Adicione uma chave id em cada objeto 
const pessoa = [
    {nome: "Luiz", idade:62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47}
];

const nomes = pessoa.map(obj => obj.nome);
console.log(nomes);
const idades = pessoa.map(obj => ({idade: obj.idade}));
console.log(idades);
const id = pessoa.map(function (obj, i) {
    const newObj = {...obj};
    newObj.id = i;
    return newObj;
});
console.log(id);
