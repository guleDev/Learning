// Contrutora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;

// instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função costrutora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função costrutora

console.dir(pessoa1);
console.dir(pessoa2);
