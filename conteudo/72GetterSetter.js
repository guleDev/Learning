// defineProperty (chave única) - defineProperties (várias chaves)
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave (Object.keys())
        configurable: true, // reconfigurar chave (true/false)
        get: (estoque => estoquePrivado),
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('NaN');
            }
            estoquePrivado = valor;
        }
    });
};

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace(' coisa', '');
            nome = valor;
        }
    };
}

const p1 = new Produto('Camiseta', 20, 3);

const p2 = criaProduto('Camisa');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);
