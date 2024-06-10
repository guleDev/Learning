#include <stdio.h>
#include <stdlib.h>

void main(){
    int opcao;

    while ((opcao < 1) || (opcao > 3)){
        printf("Escolha uma opcao:\n1- Opcao 1\n2- Opcao 2\n3- Opcao 3\n");
        scanf("%d", &opcao);
    }
    

    switch (opcao){
    case 1:
        printf("Opção 1 foi escolhida\n");
        break;
    case 2:
        printf("Opção 2 foi escolhida\n");
        break;
    case 3:
        printf("Opção 3 foi escolhida\n");
        break;
    default:
        printf("Opção Inválida\n");
        break;
    }
}
