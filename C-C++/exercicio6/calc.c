#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

// Crie um algoritimo que leia 2 valores e depois crie um menu de 4 opções.
// 1- Somar, 2 - Subtrair, 3 - Dividir, 4 - Multiplicar.
// Depois que o usuario escolher uma opção, mostre o resultado da operação escolhida com os dois valores lidos.
void main() {
    setlocale(LC_ALL, "");
    
    float valor1, valor2, resultado;
    int opcao;

    printf("Infome uma operação para ser realizada:\n1-Somar\n2-Subtrair\n3-Dividir\n4-Multiplicar\n");
    scanf("%d", &opcao);

    switch (opcao){
    case 1:
        printf("Insira os dois valores para a operação desejada:\n");
        scanf("%f %f", &valor1, &valor2);
        resultado = valor1 + valor2;

        printf("O resultado da soma é: %.2f\n", resultado);
        
        break;
    case 2:
        printf("Insira os dois valores para a operação desejada:\n");
        scanf("%f %f", &valor1, &valor2);
        resultado = valor1 - valor2;

        printf("O resultado da subtração é: %.2f\n", resultado);
        
        break;
    case 3:
        printf("Insira os dois valores para a operação desejada:\n");
        scanf("%f %f", &valor1, &valor2);
        resultado = valor1 / valor2;

        printf("O resultado da divisão é: %.2f\n", resultado);
        
        break;
    case 4:
        printf("Insira os dois valores para a operação desejada:\n");
        scanf("%f %f", &valor1, &valor2);
        resultado = valor1 * valor2;

        printf("O resultado da multiplicação é: %.2f\n", resultado);
        
        break;
    default:
        printf("Opção Inválida!\n");
        break;
    }
}
