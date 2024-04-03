let umaString = 'Um texto';

console.log(umaString); //  Um texto
console.log(umaString[3]); //  m
console.log(umaString.charAt(4)); //   e
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia'); 
console.log(`${umaString} em um lindo dia`); //   Interpolação de string
console.log(umaString.indexOf('texto')); //  Retorna o indice da palavra "texto" no texto, se não achar retorna -1
console.log(umaString.indexOf('o', 3)); //   9
console.log(umaString.lastIndexOf('o')); //  Retorna o ultimo index de "o" na string
console.log(umaString.lastIndexOf('o', 3)); //  Retorna o índice do último "o" antes da posição informada
console.log(umaString.match(/[a-z]/g)); //  Retorna todos os caracteres minúsculos de "Um" e "texto"
console.log(umaString.search(/x/)); //  Procura o caractere "x" na string
console.log(umaString.replace('Um', 'Outra')); //   Substitui a palavra "Um" por "Outra"
console.log(umaString.length); //   9
console.log(umaString.slice(0, 3)); //   Um 
console.log(umaString.split(' ')); // retorna array com as palavras separadas por espaço
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
