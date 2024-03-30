/* 
//Meu código
function submit(){
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    function request(evento){
        evento.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        console.log(peso.value, altura.value)

        function imcCalc(peso, altura){
            return (peso/altura**2).toFixed(2)
        }
        
        function imcResult(imc = imcCalc(peso.value = 0, altura.value = 0)){
            if (imc < 18.5){
                resultado.innerHTML =  `Seu IMC é ${imc}. Você está abaixo do peso!`;
            }
            else if (imc > 18.5 && imc <= 24.9){
                resultado.innerHTML =  `Seu IMC é ${imc}. Seu peso está normal!`;
            }
            else if (imc >= 25 && imc <= 29.9){
                resultado.innerHTML =  `Seu IMC é ${imc}. Você está com sobrepeso!`;
            }
            else if (imc >= 30 && imc <= 34.9){
                resultado.innerHTML =  `Seu IMC é ${imc}. Você está com obesidade grau 1!`;
            }
            else if (imc >= 35 && imc <= 39.9){
                resultado.innerHTML =  `Seu IMC é ${imc}. Você está com obesidade grau 2!`;
            }
            else if (imc > 40){
                resultado.innerHTML =  `Seu IMC é ${imc}. Você está com obesidade grau 3!`;
            }
            else{
                resultado.innerHTML =  `Erro no calculo!`
            }    
        }
        
        imcResult()

    }

    form.addEventListener('submit', request);
}

submit()
*/
//Correção
const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido!', false);
        return;
    }
    if(!altura){
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 34.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
};

function getImc(peso, altura){
    const valorIMC = peso / (altura ** 2);
    return valorIMC.toFixed(2);
};

function criaP(){
    const p = document.createElement('p');
    return p;
};

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    
    const p = criaP();
    
    if(isValid){
        p.classList.add('green')
    } 
    else{
        p.classList.add('red')
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p)
};