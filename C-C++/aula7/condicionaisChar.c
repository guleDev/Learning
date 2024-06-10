#include <stdio.h>
#include <stdlib.h>

void main(){
    char letra = 'x';

    // Condicional simples
    if(letra == 'x'){
        printf("A letra é x\n");
    }

    printf("O código da letra é: %d\n", letra); // Transforma a letra em um valor int (código da tabela ASCII)

    if(letra == 120){
        printf("A letra é x\n");
    }
}
