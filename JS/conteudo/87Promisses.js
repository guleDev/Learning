function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
           resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o DB', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(12345, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibindo dados da base');
    })
    .catch(e => {
        console.log('ERRO', e);
    });

console.log('Não espero as promisses terminarem!')
