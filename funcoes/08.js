function saldo(){

    let valor = parseFloat(prompt("Digite seu salário"));
    let reajuste = valor * 0.03

    valor +=  reajuste

    console.log(`O novo salário é de R$${valor.toFixed(2)}`)
}
saldo()