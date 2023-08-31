let cotacao = parseFloat(prompt("Digite a cotação atual"));


let dolar = parseFloat(prompt("Digite o valor em dolar"));



let conversao = dolar / cotacao
let diferenca = dolar * cotacao

alert(`${cotacao.toFixed(2)} é equivalente a R$ ${diferenca.toFixed(2)} tendo ${dolar.toFixed(2)} como cotacão`)