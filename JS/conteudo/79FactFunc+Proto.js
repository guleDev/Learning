function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`);
        },
        comer() {
            console.log(`${this.nome} está comendo`);
        },
        beber() {
            console.log(`${this.nome} está bebendo`);
        }
    };
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
};

const p1 = criaPessoa('Luiz', 'Otávio')
p1.falar();
p1.comer();
p1.beber();