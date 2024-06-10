#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

void main() {
    
    setlocale(LC_ALL,"");
    printf("Olá\n");

    int a = 50; 
    printf("O valor de \'a\' é = %d\n", a); // %d para variáveis tipo int
    scanf("%d", &a); // & significa endereço na memória
    printf("O novo valor de \'a\' é = %d\n", a);

    float b = 5.5; 
    printf("O valor de \'b'\' é = %f\n", b); // %f para variáveis tipo float
    scanf("%f", &b);
    printf("O novo valor de \'b\' é = %f\n", b);

    char letra = 't'; 
    printf("O valor de \'c'\' é = %c\n", letra); // %c para variáveis tipo char
    fflush(stdin); // limpa o buffer(memoria temporaria de leitura) principal
    scanf("%c", &letra);
    printf("O novo valor de \'c\' é = %c\n", letra);
}
