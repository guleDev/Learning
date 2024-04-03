function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function(evento){
    //     evento.preventDefault();
    // };

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.name');
        const sobrenome = form.querySelector('.lastName');
        const peso = form.querySelector('.weight');
        const altura = form.querySelector('.height');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    };

    console.log(pessoas);

    form.addEventListener('submit', recebeEventoForm);
};

meuEscopo();