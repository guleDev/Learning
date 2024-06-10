#include <stdio.h>
#include <stdlib.h>

void main(){
    int a = 5, opcao = 2;
    float b = 2.5;
    char c = 'x';

    // condicional simples
    if (a == 5){
        printf("A variável \"a\" é igual a 5\n");;
    }
    if (b == 2.5){
        printf("A variável \"b\" é igual a 2.5\n");;
    }
    if (c == 'x'){
        printf("A variável \"c\" é igual a x\n");;
    }
    // numero impar
    if (a % 2 == 1){
        printf("%d é impar\n", a);
    } else {
        printf("%d é par\n", a);
    }
    // condicional composta
    if(opcao == 1){
        printf("A opção é 1\n");
    }
    else if(opcao == 2){
        printf("A opção é 2\n");
    }
    else if(opcao == 3){
        printf("A opção é 3\n");
    }
    else{
        printf("A opção não está cadastrada\n");
    }
}
