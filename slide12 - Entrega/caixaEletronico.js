const user = {
    name: "John Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
        {
            number: "5160 4196 4843 3388",
            creditBalance: 1000,
            ensign: "American Express",
        },
    ],
};

function makeWithDrawal(user, tipoConta, withdrawnAmount) {
    const responseWithDraw = tipoConta;

    if (isNaN(withdrawnAmount) || withdrawnAmount <= 0 || withdrawnAmount < 5 || withdrawnAmount > 500) {
        return `Valor não é permitido`;
    }

    if (responseWithDraw === 1) {
        if (user.savingsBalance >= withdrawnAmount) {
            user.savingsBalance -= withdrawnAmount;
            return `Saque realizado com sucesso`;
        } else {
            return "Saldo indisponível";
        }
    } else if (responseWithDraw === 2) {
        if (user.cardsInformation.length > 0) {
            const creditCard = user.cardsInformation[0];
            if (creditCard.creditBalance >= withdrawnAmount) {
                creditCard.creditBalance -= withdrawnAmount;
                return `Saque realizado com sucesso`;
            } else {
                return "Saldo indisponível";
            }
        } else {
            return "Nenhum cartão de crédito disponível";
        }
    } else {
        return `Tipo de conta inválida`;
    }
}

function getBalance(user, tipoConta) {
    if (tipoConta === 1) {
        return user.savingsBalance;
    } else if (tipoConta === 2) {  
        return "Nenhum cartão de crédito disponível";
    } else {
        return `Tipo de conta inválida`;
    }
}

function makeDeposit(user, valueForDeposit){
    if(isNaN(valueForDeposit) || valueForDeposit <=0 || valueForDeposit < 5 || valueForDeposit > 500){
        return `Valor não permitido`
    }
    user.savingsBalance += valueForDeposit;
    alert("Depósito feito com sucesso..")
}