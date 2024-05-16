class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable:false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    };
    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    };
    geraNovoCPF() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digitoUm = ValidaCPF.geraDigito(cpfParcial);
        const digitoDois = ValidaCPF.geraDigito(cpfParcial + digitoUm);
        this.novoCPF = cpfParcial + digitoUm + digitoDois;
        };
    static geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for (let StringNumerica of cpfParcial) {
            total += reverso * Number(StringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito): '0'
    }
    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.eSequencia()) return false;
        this.geraNovoCPF()

        return this.novoCPF === this.cpfLimpo;
    };
}

let validaCPF_1 = new ValidaCPF('705.484.450-52');
let validaCPF_2 = new ValidaCPF('070.987.720-03');

if (validaCPF_2 .valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}
