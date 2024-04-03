let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATempo = varA;
varA = varB;
varB = varC;
varC = varATempo;

console.log(varA, varB, varC);

varA = 'A'; // B
varB = 'B'; // C
varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
