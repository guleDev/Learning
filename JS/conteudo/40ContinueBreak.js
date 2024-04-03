const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue -continua
// Break - quebra e fecha

for (let i of numeros){

    let numero = numeros[i];
    
    if (numero === 2){
        console.log('Pulei o número 2')
        continue;
    }

    if (numero === 7){
        console.log('7 Encontrado, saindo...')
        break;
    }

    console.log(numero);
}
