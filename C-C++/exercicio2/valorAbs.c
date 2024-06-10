#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

// Crie um algoritimo que leia 2 notas e mostre o valor absoluto da diferença entre elas

void main() {
    setlocale(LC_ALL, "");
    
    float nota1, nota2, valorAbs;

    printf("Insira um valor para a primeira nota: ");
    scanf("%f", &nota1);

    printf("Insira um valor para a segunda nota: ");
    scanf("%f", &nota2);
    
    valorAbs = abs(nota1 - nota2);
    
    printf("O valor absoluto da diferença das notas %f e %f é: %f\n", nota1, nota2, valorAbs);
}