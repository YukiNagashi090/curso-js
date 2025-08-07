// Escopo da variável, saldo é global
let saldo = 2000.90;

function sacar() {
    // Escopo da variável, valorSaque é a função sacar
    const valorSaque = parseFloat(
        prompt("Digite o valor do saque", "R$ ")
            .replace(", ", ".")
            .replace("R$", " ")
            .replaceAll(" ", "")
    );

    if (valorSaque > saldo) {
        alert("Saldo insuficiente");
    } else {
        const confirmacao = confirm("Deseja realmente realizar o saque?")
        if (confirmacao === true) {
            saldo = saldo - valorSaque;
            apresentarSaldo()
        }
    }
}

function apresentarSaldo() {
    alert("Saldo atual: R$ " + saldo.toFixed(2).replace(".", ","));
}

function depositar() {
    const valorDeposito = parseFloat(
        prompt("Digite o valor do repósito", "R$ ")
            .replace(",", ".")
            .replace("R$", "")
            .replaceAll(" ", "")
    )

    if (valorDeposito <= 0) {
        alert("Valor do depósito não pode ser menor ou igual a R$ 0,00");
        depositar(); //Recursão, método que chama ele mesmo
    } else {
        saldo = saldo + valorDeposito;
    }
}

function exemploOperadorLogicoE() {
    const login = prompt("Digite o login");
    const senha = prompt("Digite a senha");

    if (login === "root" && senha === "admin") {
        window.location.href = "https://google.com";
    } else {
        alert("Login e/ou Senha inválido");
    }

}

function exemploOperadorLogicoOu() {
    const nome = prompt("Digite o nome do bonequinho").trim();

    if (nome.length < 3 || nome.length > 50) {
        alert("Nome deve conter no mínimo 3 caracteres e no máximo 50");
        exemploOperadorLogicoOu(); // Repetir a solicitação do nome
    } else {
        alert("Nome válido" + nome);
    }

    function exemploNumeroPar() {
        let numero = parseInt(prompt("Digite um número"));
        // Se o número dividido por 2 onde o resto é zero, ele é um número par.
        if (numero % 2 === 0) {
            alert("par");
        } else {
            alert("N é um número par");
        }
    }
}

function exemploNumeroÍmpar() {
    let numero = parseInt(prompt("Digite um número"));
    if (numero % 2 !== 0) {
        alert("ímpart");
    } else {
        alert("N é um número ímpar");
    }
}

function verificarEstoque() {
    let quantidadeEstoque = parseInt(prompt("Digite a quantidade do estoque"))

    if (quantidadeEstoque >= 1) {
        alert("Saldo positivo");
    } else if (quantidadeEstoque <= -1) {
        alert("Saldo negativo");
    } else {
        alert("Saldo zerado");
    }
}

function obterPDL() {
    let pdl = parseInt(prompt("Digite o pdl"))

    let elo = "";

    if (pdl >= 0 && pdl <= 99) {
        alert("Bronze");
    } else if (pdl >= 100 && pdl <= 199) {
        elo = "Prata";
    } else if (pdl >= 200 && pdl <= 299) {
        elo = "Ouro";
    } else {
        elo = "Limite máximo atingido";
    }

    alert("Elo:" + elo);
}