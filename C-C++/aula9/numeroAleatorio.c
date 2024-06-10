#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void main(){
    srand((unsigned) time(NULL));

    // Aleatorio de 0 a 2
    int aleatorio = rand() % 3;
    
    // Aleatorio de 1 a 5
    int aleatorio2 = (rand() % 5) + 1;

    printf("%d\n", aleatorio);
    printf("%d", aleatorio2);
}