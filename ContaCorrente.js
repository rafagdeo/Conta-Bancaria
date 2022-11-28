export class ContaCorrente {
    agencia;
    _saldo = 0;
    cliente;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if (valor <= 0){
            return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta){
        conta.cidade = "são paulo";
        const valorSacado = this.sacar( valor);
            conta.depositar(valorSacado);
        }
}
