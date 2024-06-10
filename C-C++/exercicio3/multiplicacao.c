#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

// Crie um algoritimo que leia 3 números inteiros de uma só vez e coloque os resultados da multiplicação entre os 3 em uma variável própria, depois exiba a variável

void main() {
    setlocale(LC_ALL, "");
    
    int valor1, valor2, valor3, multiplicados;

    printf("Insira três valores inteiros para serem multiplicados:\n");
    scanf("%d %d %d", &valor1, &valor2, &valor3);
    multiplicados = valor1 * valor2 * valor3;
    printf("O resultado é: %d\n", multiplicados);
}