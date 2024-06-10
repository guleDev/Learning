#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

void main(){
    setlocale(LC_ALL,"");
    
    char palavra[255];

    printf("Digite uma palavra \n");

    //limpa o buffer
    setbuf(stdin, 0);

    //ler a string
    fgets(palavra, 255, stdin);

    //limpa as casa não usadas
    palavra(strlen(palavra) - 1) = '\0';

    printf("%s", palavra);
}