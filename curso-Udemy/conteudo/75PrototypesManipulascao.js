const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};
const objC = {
    chaveC: 'C'
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percent) {
this.preco = this.preco - (this.preco * (percent/100));
};

Produto.prototype.aumento = function(percent) {
this.preco = this.preco + (this.preco * (percent/100));
};

const p1 = new Produto('Camiseta', 50);
   