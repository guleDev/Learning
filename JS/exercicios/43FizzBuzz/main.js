function eFizz(num){
    return num % 3 === 0
}

function eBuzz(num){
    return num % 5 === 0
}

function eFizzBuzz(num){
    return num % 3 === 0 && num % 5 ===0
}

function test(num){
    if (typeof num !== 'number') return num;
    if (eFizzBuzz(num)) return 'FizzBuzz';
    if (eFizz(num)) return 'Fizz';
    if (eBuzz(num)) return 'Buzz';
    return num
}

for (let i = 0; i <= 100; i++){
    console.log(i, test(i))
}