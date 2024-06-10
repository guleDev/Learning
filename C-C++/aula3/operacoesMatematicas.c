#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

void main(){

    setlocale(LC_ALL,"");

    int a = 6, b = 3;

    printf("A soma de a(%d) e b(%d) é: %d\n", a, b, a + b);

    printf("A subtração de a(%d) e b(%d) é: %d\n", a, b, a - b);

    printf("A divisão de a(%d) e b(%d) é: %d\n", a, b, a / b);

    printf("A multiplicação de a(%d) e b(%d) é: %d\n", a, b, a * b);

    printf("O resto da divisão de a(%d) e b(%d) é: %d\n", a, b, a % b);

    printf("O valor absoluto de -3 é: %d\n", abs(1-3));

    system("pause");
}