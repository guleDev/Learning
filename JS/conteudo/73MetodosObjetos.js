/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(objeto, 'prop')
Object.assign(objeto destino, any)
... (spread)

Object.keys (retorna chave)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const canecaBase = {
    nome: 'Caneca',
    preco: 1.8
};
Object.freeze(canecaBase);
canecaBase.nome = 'Xicara';

const produto = Object.assign({}, canecaBase, {material: 'porcelana'});

produto.nome = 'Outro Nome';
produto.preco = 2.5;
console.log(canecaBase);
console.log(produto);

console.log(Object.getOwnPropertyDescriptor(canecaBase, 'nome'));
