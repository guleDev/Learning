// function tem arguments que armazenam os argumentos enviados

function funcao({ nome, sobrenome, idade }){
    console.log(nome, sobrenome, idade)
}

let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20};
funcao(obj);
