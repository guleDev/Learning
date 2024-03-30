// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
    
    const sobrenome = 'Miranda';
    function criaNome(nome){
        return `${nome} ${sobrenome}`
    }

    function falaNome(){
        console.log(criaNome('Luiz'));
    }

    falaNome();

}) (30, 80, 1.80);
