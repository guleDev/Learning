function* geradora1() {
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}
// Apenas os valores atribuidos
const g1 = geradora1();
console.log("g1 :" + g1.next().value);
console.log("g1 :" + g1.next().value);
console.log("g1 :" + g1.next().value);

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
// Função infinita, imprime quantas vezes for chamado
const g2 = geradora2();
console.log("g2 :" + g2.next().value);
console.log("g2 :" + g2.next().value);
console.log("g2 :" + g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
// usa o g4 para "chamar" o g3
const g4 = geradora4();
for (let i of g4) {
    console.log("g3/g4 :" + i);
}

function* geradora5() {
    yield function() {
        console.log("Vim do yield 1");
    };

    yield function() {
        console.log("Vim do yield 2");
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
