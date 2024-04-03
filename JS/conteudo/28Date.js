/* Bloco 1

// const data = ner Date(0); // data marco 0
// const data = new Date(); // data atual
// const data = new Date(2004, 7, 25, 04, 23, 47); // A, M, D, h, m, s, ms
const data = new Date('2004-08-25T04:23:47');
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // 0 = Janeiro | 11 = Dezembro
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 = Domingo | 6 = Sábado
console.log(Date.now());// data atual em ms a partir do marco 0
*/

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth()+1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)