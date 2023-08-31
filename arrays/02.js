let primeiroNumero = prompt("Digite o primeiro numero")
let segundoNumero = prompt("Digite o segundo numero")

if(primeiroNumero === segundoNumero){
    alert(`Numeros são iguais`)
} else if(primeiroNumero > segundoNumero){
    alert(`O ${primeiroNumero} é maior que ${segundoNumero}`)
} else{
    alert(`O ${segundoNumero} é maior que ${primeiroNumero}`)
}