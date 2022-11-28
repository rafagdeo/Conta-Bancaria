import { ContaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";
// contas dos clientes
const cliente1 = new Cliente();
cliente1.nome = "Rafael";
cliente1.cpf = 11122233309;
cliente1.telefone = 11-999999999;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.telefone = 11-999999999;


const contaCorrenteRafael = new ContaCorrente;
contaCorrenteRafael.agencia = 1001;
contaCorrenteRafael.cliente = cliente1;
contaCorrenteRafael.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1001;

contaCorrenteRafael.transferir(200, conta2);
console.log(conta2);
console.log(contaCorrenteRafael);