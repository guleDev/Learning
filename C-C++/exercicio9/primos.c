#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

void main(){
    setlocale(LC_ALL,"");

    int i, x, aux = 0;

    printf("Informe um valor: ");
    scanf("%d", &x);

    for(i = 1; i <= x; i++){
        if(x % i == 0) {
            aux++;
        }
    }

    if(aux == 2){
        printf("%d é primo\n", x);
    } else{
        printf("%d não é primo, pois ele tem %d divisores\n", x, aux);
    }
    
}
