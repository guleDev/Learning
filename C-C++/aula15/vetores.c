#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#define TAM 3

void main(){
    setlocale(LC_ALL,"");
    int vetor[TAM], i;

    vetor[0] = 5;
    vetor[1] = 10;
    vetor[2] = 15;

    // soma um ao valor original de cada vetor
    for(i = 0;i < TAM; i++){
        vetor[i] = vetor[i] + 1;
    }

    // imprime a posição do vetor e o valor do vetor
    for(i = 0;i < TAM; i++){
        printf("Posição %d: %d\n", i, vetor[i]);
    }

    // lê os valores para os vetores
    for(i = 0;i < TAM; i++){
        printf("Digite um valor para o vetor na posição %d\n", i);
        scanf("%d", &vetor[i]);
    }

    // imprime a posição do vetor e o novo valor do vetor
    for(i = 0;i < TAM; i++){
        printf("Posição %d: %d\n", i, vetor[i]);
    }
}
