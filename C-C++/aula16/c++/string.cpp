#include <stdlib.h>
#include <locale.h>
#include <string>
#include <iostream>

using namespace std;

int main(){
    setlocale(LC_ALL,"");

    //Definindo um String
    string palavra;
    
    //Print na tela
    cout << "Digite uma palavra";
    
    //Lendo uma String
    cin >> palavra;

    //Imprime uma váriavel
    cout << "\nA palavra é: " << palavra;

    return 0;
}