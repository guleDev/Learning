// Função hoisting
falaOi();
function falaOi(){
    console.log('Hello World!');
}

// First-class objects (Objetos de primeira classe)
// Function expresson
const souUmDado = function(){
    console.log('Sou um dado.');
}

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo.');
    funcao();
}
executaFuncao(souUmDado);

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
}

funcaoArrow();

// Função em Objeto

const obj = {
    falar : function(){
        console.log('Estou falando...')
    },
    falarDois(){
        console.log('Estou falando denovo...')
    }
};

obj.falar();
obj.falarDois();
