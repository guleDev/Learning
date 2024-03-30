// defineProperty (chave única) - defineProperties (várias chaves)
function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra chave (Object.keys())
            value: nome, // valor
            writable: false, // altera valor (true/false)
            configurable: false // reconfigurar chave (true/false)
        },
        preco: {
            enumerable: true, // mostra chave (Object.keys())
            value: preco, // valor
            writable: false, // altera valor (true/false)
            configurable: false // reconfigurar chave (true/false)
        },
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostra chave (Object.keys())
        value: estoque, // valor
        writable: false, // altera valor (true/false)
        configurable: false // reconfigurar chave (true/false)
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
};
