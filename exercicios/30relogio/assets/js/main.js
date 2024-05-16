const container = document.querySelector('.container h1');
const data = new Date();

const meses = ['Janeiro','Fevereiro','Marco','Abril','Maio','Junho','Julho','Agosto','Septembro','Outubro','Novembro','Dezembro']
const diaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

container.innerHTML = `${diaSemana[data.getDay()]}, ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes() >= 10 ? data.getMinutes() : `0${data.getMinutes()}`}`;

/* correção
const container = document.querySelector('.container h1');
const data = new Date();

container.innerHTML = data.toLocaleDateString(pt-BR, {dateStyle: 'full', TimeStyle: 'short'});
*/