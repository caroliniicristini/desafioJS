function numeros(){
    let primeiroNumero = parseInt(prompt("Digite um número"));
    let segundoNumero = parseInt(prompt("Digite o segundo número"))    
 

    let maiorNumero = Math.max(primeiroNumero, segundoNumero)

    //valor absoluto
    let diferenca = Math.abs(primeiroNumero - segundoNumero)

    alert(`O maior numero é ${maiorNumero} e a diferença é de ${diferenca}`)
}

numeros()