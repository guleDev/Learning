#include <stdio.h>
#include <stdlib.h>

void main(){
    int a = 1;
    char b = 'x';

    switch (a){
    case 1:
        printf("Opção escolhida: 1");
        break;
    case 2:
        printf("Opção escolhida: 2");
        break;
    case 3:
        printf("Opção escolhida: 3");
        break;
    default:
        printf("Opção inválida");
        break;
    }

    switch (b){
    case 'x':
        printf("Opção escolhida: x");
        break;
    case 'y':
        printf("Opção escolhida: y");
        break;
    case 'z':
        printf("Opção escolhida: z");
        break;
    default:
        printf("Opção inválida");
        break;
    }
}