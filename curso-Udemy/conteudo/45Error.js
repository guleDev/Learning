/*try{
    console.log('Arquivo aberto')
    console.log('Arquivo error')
    console.log('Arquivo fechado')
} catch (e){ // executa quando há um erro
    console.log('Tratando o erro')
} finally{ // sempre
    console.log('Sempre sou executado!')
}*/

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperado instacia de Date!')
    }
    
    if (!data){
        data = new Date;
    }

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora)
} catch (e){
    console.log(e)
} finally{
    console.log('Bom dia')
}