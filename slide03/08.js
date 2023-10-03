//terminar

let pulverizacao = prompt("Digite o numero da pulverizacao de 1 a 4, sendo: \n\n 1: Ervas daninhas R$ 50,00 por acre \n 2:  Gafanhotos R$ 100,00 por acre \n 3: Broca R$ 150,00 por acre \n 4: Todos acima R$ 250,00 por acre \n ")
let area = prompt("Digite o tamanho da área")

switch (pulverizacao){
    case 1: 
    res = area * 50
    break;
    case 2:
    res = area * 100
    break;
    case 3:
    res = area * 150
    break;
    case 4:
    res = area * 250
    break;

}

alert(`O valor a ser pago é de R$ ${res.toFixed(2)}`)