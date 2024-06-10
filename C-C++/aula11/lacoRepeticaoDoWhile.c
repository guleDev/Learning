#include <stdio.h>
#include <stdlib.h>

void main(){
    int a = 20;

    // Executa o bloco, depois valida a condição
    do{
        printf("%d\n", a);
        a++;
    } while(a <= 10);
}