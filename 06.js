let salarioMensal = prompt("Digite o valor do seu salário")

let percentualReajuste =  parseFloat(prompt("Digite o valor do percentual do rejuste"))

if(percentualReajuste <= 5) {

    let salarioComReajuste = (salarioMensal * (1 + percentualReajuste / 100));
    alert(`O salário do funcionario corrigido é de: ${salarioComReajuste.toFixed(2)}`);

    } else {
        alert(`O percentual ${percentualReajuste} é inválido`);
    }

