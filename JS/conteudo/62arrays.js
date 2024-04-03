// const nomes = new Array('Eduardo', 'Maria', 'Joana');
const nomes = ['Eduardo', 'Maria', 'Joana', 'Rosana'];
const novo1 = [...nomes];
const novo2 = nomes.slice(0,3);

const removidoFim = novo1.pop(); // final - tira
const removidoComeco = novo1.shift(); // começo - tira

nomes.push('João'); // final - coloca
nomes.unshift('Wallace'); // começo - coloca

console.log(nomes);
console.log(removidoComeco ,novo1, removidoFim);
console.log(novo2);

// converção

const nome1 = 'Luiz Otávio Miranda';
const arrayNome1 = nome1.split(' ');

console.log(arrayNome1);

const nome2 = ['Luiz', 'Otávio', 'Miranda'];
const arrayNome2 = nome2.join(' ');

console.log(arrayNome2);
