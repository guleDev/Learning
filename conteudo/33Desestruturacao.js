const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação (Objeto)
const {nome = 'Não cadastrado', sobrenome: lastName, endereco: {rua, numero}} = pessoa

console.log(nome, lastName, numero)