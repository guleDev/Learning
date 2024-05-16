// For clássico - (array ou strings)
// For in - (string, array ou objetos)
// For of - (iteráveis, arrays ou strings)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}

console.log('######')


const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let i in nomes){
    console.log(nomes[i])
}

console.log('######')

for (let valor of nomes){
    console.log(valor)
}