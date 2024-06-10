#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

// Crie um algoritimo que leia 2 notas e mostre a média entre elas.s

void main() {
    setlocale(LC_ALL, "");
    
    float nota1, nota2, media;

    printf("Insira um valor para a primeira nota: ");
    scanf("%f", &nota1);

    printf("Insira um valor para a segunda nota: ");
    scanf("%f", &nota2);
    
    media = (nota1 + nota2) / 2;
    
    printf("A média entre as notas %f e %f é: %f\n", nota1, nota2, media);
}