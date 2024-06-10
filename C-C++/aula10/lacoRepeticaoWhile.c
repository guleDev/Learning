#include <stdio.h>
#include <stdlib.h>

void main(){
    int a = 1, b = 10;

    // Valida a condição, depois executa o bloco 
    while(a <= 10) {
        printf("%d\n", a);
        a++;
    }

    while(b >= 1) {
        printf("%d\n", b);
        b--;
    }
}