function teste() {
    console.log('Isso é um teste')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    // Métodod de Instancia
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }
    // Métodod Estático
    static trocaPilha() {
        console.log('Pilhas trocadas');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);
