#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

// Crie um algoritimo que leia 3 notas e calcule a média entre elas.
// Se o valor for maior que 7 informe que o aluno foi aprovado, senão reprovado

void main() {
    setlocale(LC_ALL, "");
    
    float nota1, nota2, nota3, media;

    printf("Informe as três notas:\n");
    scanf("%f %f %f", &nota1, &nota2, &nota3);

    media = (nota1 + nota2 + nota3) / 3;

    printf("A média das três notas é: %.2f\n", media);
    if (media >= 7){
        printf("Aprovado!!\n");
    } else {
        printf("Reprovado!!\n");
    }
    
}
