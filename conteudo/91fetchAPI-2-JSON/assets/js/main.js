const resultado = document.querySelector('.resultado');

fetch('pessoas.json')
 .then(resposta => resposta.json())
 .then(json => carregaElementosNaPagina(json));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    
    for(let pessoa of json) {
        const tr = document.createElement('tr');
        
        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        table.appendChild(tr);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);
        table.appendChild(tr);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);
        table.appendChild(tr);
    }
    resultado.appendChild(table);
}
