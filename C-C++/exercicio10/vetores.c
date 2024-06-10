#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#define VET 4

// Crie um algoritimo que leia 3 valores para um vetor de 3 posições e depois calcule a média dos valores acessando o vetor.

void main() {
    setlocale(LC_ALL, "");
    float vetor[VET], soma;
    int i;

    for(i = 1;i < VET ;i++){
        printf("Insira um valor para o vetor na posição %d: ", i);
        scanf("%f", &vetor[i]);
        soma += vetor[i];
    }
    
    vetor[0] = soma / (VET - 1);

    for(i = 1;i < VET;i++){
        printf("nota %d: %.2f\n", i, vetor[i]);
    }

    printf("média: %.2f\n", vetor[0]);
}
