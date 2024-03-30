/*
Função construtora -> objetos

Pessoa (new)

*/

function Pessoa(nome, sobrenome) {
    // Atributo ou método privado
    const metodoInterno = function() {
        console.log('não posso ser chamado fora da função')
    };
    
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio')
p1.metodo();
/*
Função fabrica -> objetos



*/