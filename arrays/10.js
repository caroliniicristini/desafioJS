let valor = parseFloat(prompt("Digite o valor da fatura"))

let taxa = parseFloat(prompt("Digite o valor da taxa"))

let tempo = parseInt(prompt("Digite o tempo de atraso da fatura em dias"))

// % resto da divisao 
// !== diferente 

if(tempo === 0 || tempo % 1 !== 0){
    alert("Valor inválido, o tempo de atraso deve ser em dias")
} else{
    let prestacao = valor + (valor * (taxa / 100) * tempo)
    alert(`O valor a ser pago é de R$ ${prestacao.toFixed(2)}`)
}

