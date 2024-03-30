/*function max(x, y){
    if (x > y){
        return x;
    } else{
        return y;
    }
}

console.log(max(50, 80))*/

/*function max(x, y){
    return x > y ? x : y;
}

function max(x, y) => x > y ? x : y;

console.log(max(50, 80))
*/
const x = 10;
const y = 20;
const numbers = [x, y, 5, 40, 3];

let maior = 0;

for (let i of numbers){
    if (i > maior){
        maior = i;
        continue;
    }
}

console.log(maior);
