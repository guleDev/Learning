
function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser numeros!')  // cria um erro       
    }

    return x + y;
}

try{ // testa
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch (e){ // captura o erro e lança alguma coisa se der erro
    console.log(e)
    console.log('Ocorreu um erro!')
}