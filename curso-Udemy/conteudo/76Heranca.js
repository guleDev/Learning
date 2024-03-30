function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: () => estoque,
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const p1 = new Camiseta('Regata', 7.5, 'Preta');
p1.aumento(10);
console.log(p1);

const p2 = new Caneca('Caneca', 13, 'Plástico', 5);
p2.estoque = 30
console.log(p2);
