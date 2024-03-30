const nomes = ["Maria", "Joâo", "Eduardo", "Gabriel", "Júlia"];

// nomes.splice(índice, numDelete, elem1, elem2, elem3);
// pop
const popNomes = ["Maria", "Joâo", "Eduardo", "Gabriel", "Júlia"];
const popRemovidos = popNomes.splice(-1, 1);
console.log(popNomes, "\n", popRemovidos);

// shift
const shiftNnomes = ["Maria", "Joâo", "Eduardo", "Gabriel", "Júlia"];
const shifrRemovidos = shiftNnomes.splice(0, 1);
console.log(shiftNnomes, "\n", shifrRemovidos);

// push
const pushNomes = ["Maria", "Joâo", "Eduardo", "Gabriel", "Júlia"];
pushNomes.splice(pushNomes.length, 0, "Luiz", "Otávio", "Miranda");
console.log(pushNomes, "\n");

// unshift
const unshiftNomes = ["Maria", "Joâo", "Eduardo", "Gabriel", "Júlia"];
unshiftNomes.splice(0, 0, "Luiz", "Otávio", "Miranda");
console.log(unshiftNomes, "\n");
