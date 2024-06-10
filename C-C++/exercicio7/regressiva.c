#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

void main(){
    setlocale(LC_ALL,"");

    int i;

    printf("FOR\n");
    for (i = 10; i >= 0; i--){
        printf("%d\n", i);
    }

    i = 10;

    printf("WHILE\n");
    while (i >= 0){
        printf("%d\n", i);
        i--;
    }

    i = 10;

    printf("DO WHILE\n");
    do {
        printf("%d\n", i);
        i--;
    }while (i >= 0);
}