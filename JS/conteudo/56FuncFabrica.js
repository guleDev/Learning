// Factory function
// Constructor function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso/(this.altura**2)
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.fala('falando sobre JS'), p1.imc);
console.log(p1.nomeCompleto);
console.log('nome: ', p1.nome, ' sobrenome: ' ,p1.sobrenome);
