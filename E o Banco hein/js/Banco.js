var saldoDisponivel = 1200;
var nome;
entrada();
function entrada() {
  var entradaUsuario = parseInt(
    prompt("Deseja acessar o Caixa Eletrônico?\n 1-Sim \n 2-Não")
  );
  switch (entradaUsuario) {
    case 1:
      nameUser();
      break;
    case 2:
      alert(" foi um prazer ter você por aqui! Volte sempre!");
      entrada();
      break;
    default:
      alert("Digite um valor válido.");
      entrada();
  }
}
function nameUser() {
  while (true) {
    nome = prompt("Qual o seu nome?");
    if (nome !== null && nome.trim() !== "") {
      alert("Olá " + nome + ", é um prazer ter você por aqui!");
      break;
    } else {
      alert("Por favor, preencha seu nome.");
    }
  }
  inicio();
}
function inicio() {
  var respostaMenu = parseInt(
    prompt(
      "O que deseja? \n 1-saldo \n 2-extrato \n 3-saque \n 4-depósito \n 5-transferência \n 6-sair"
    )
  );
  switch (respostaMenu) {
    case 1:
      saldo();
      break;
    case 2:
      extrato();
      break;
    case 3:
      saque();
      break;
    case 4:
      depositar();
      break;
    case 5:
      transfer();
      break;
    case 6:
      fim();
      break;
    default:
      alert("Digite um número de acordo com o menu.");
      inicio();
  }
}
function saldo() {
  var senha = parseInt(prompt("Digite sua senha"));
  if (senha == 3589) {
    alert("O seu saldo é de " + saldoDisponivel);
  } else {
    saldo();
  }
  navegacao();
}
function extrato() {
  var senha = parseInt(prompt("Digite sua senha"));
  if (senha == 3589) {
    alert(
      " Mercado : R$799,99 \n Sorveteria : R$29,99 \n Oboticário : R$269,99 \n Magazineluiza : R$559,99"
    );
  } else {
    extrato();
  }
  navegacao();
}
function saque() {
  var senha = parseInt(prompt("Digite sua senha"));
  if (senha == 3589) {
    sacarValor();
  } else {
    saque();
  }
}
function sacarValor() {
  var sacar = parseFloat(prompt("Quanto você deseja sacar?"));
  if (sacar < 0 || sacar == 0) {
    alert("Operação não autorizada.");
    sacarValor();
  } else {
    if (sacar > saldoDisponivel) {
      alert("Operação não autorizada");
      sacarValor();
    } else {
      saldoDisponivel = saldoDisponivel - sacar;
      alert(
        "Saque concluído. Seu saldo disponível após o saque: " +
          saldoDisponivel
      );
      navegacao();
    }
  }
}
function navegacao() {
  var navegacaoVerif = parseInt(
    prompt("Deseja voltar ao menu? 1-Sim 2-Não")
  );
  if (navegacaoVerif == 1) {
    inicio();
  } else if (navegacaoVerif == 2) {
    fim();
  } else {
    alert("Digite um valor de válido.");
    navegacao();
  }
}
function depositar() {
  var senha = parseInt(prompt("Digite sua senha"));
  if (senha == 3589) {
    depositarValor();
  } else {
    depositar();
  }
}
function depositarValor() {
  var deposito = parseFloat(prompt("Quanto você deseja depositar"));
  if (deposito < 0 || deposito == 0) {
    alert("Operação não autorizada");
    depositarValor();
  } else {
    saldoDisponivel = saldoDisponivel + deposito;
    alert("Depósito realizado com sucesso");
    navegacao();
  }
}
function transfer() {
  var senha = parseInt(prompt("Digite sua senha"));
  if (senha == 3589) {
    transferConta();
  } else {
    transfer();
  }
}
function transferConta() {
  var contaTransfer;
  var numericRegex = /^[0-9]+$/;
  while (true) {
    var userInput = prompt(
      "Digite o número da conta da qual você quer transferir dinheiro."
    );
    if (numericRegex.test(userInput)) {
      contaTransfer = parseInt(userInput);
      break;
    } else {
      alert("Valor inválido. Digite somente números.");
    }
  }
  transferValor();
}
function transferValor() {
  var transferVal = parseInt(
    prompt("Qual o valor que deseja transferir?")
  );
  if (
    transferVal < 0 ||
    transferVal == 0 ||
    transferVal > saldoDisponivel
  ) {
    alert("Operação não autorizada");
    transferValor();
  } else {
    saldoDisponivel = saldoDisponivel - transferVal;
    alert(
      "Transferência feita com sucesso. Saldo disponível após a transferência: " +
        saldoDisponivel
    );
    navegacao();
  }
}
function fim() {
  alert(nome + ", foi um prazer ter você por aqui! Volte sempre!");
  entrada();
}