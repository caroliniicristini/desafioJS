let tempo = prompt("Digite o tempo gasto de viagem:")

let velocidade = prompt("Digite a valocidade feita durante a viagem:")
let distancia = tempo * velocidade
let litrosUsado = distancia / 12 

alert(`Seu veículo percorreu ${distancia.toFixed(2)} a ${velocidade}/km em ${tempo}h de viagem e consumiu ${litrosUsado.toFixed(2)} de gasolina`)