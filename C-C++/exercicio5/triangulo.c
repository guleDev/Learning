#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

// Crie um algoritimo que leia 3 valores e informe se eles são iguais entre si para formarem os lados de um triângulo equilátero.

void main() {
    setlocale(LC_ALL, "");
    
    float lado1, lado2, lado3;

    printf("Informe as três medidas:\n");
    scanf("%f %f %f", &lado1, &lado2, &lado3);

    if ((lado1 == lado2) && (lado2 == lado3)){
        printf("É um triangulo equilátero!\n");
    } else if ((lado1 == lado2) || (lado2 == lado3) || (lado3 == lado1)){
        printf("É um triângulo isósceles!\n");
    } else {
        printf("É um triangulo escaleno!\n");
    }
}
