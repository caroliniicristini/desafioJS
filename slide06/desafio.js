function gerarNumeroAleatorio(){

    let numero = Math.floor(Math.random() * 20) + 1;
    return numero
}


function verificarPalpite(numeroAleatorio){

    let tentativa = 1;

    while(true){

        let palpite = parseInt(prompt("Digite um número aleatório"))
        const numeroAleatorio = gerarNumeroAleatorio();

        if(palpite > 20 || palpite < 1) {
            alert("NUMERO INVÁLIDO! Digite um numero válido entre 1 e 20")
        } else if( palpite < numeroAleatorio){
            alert("Tente novamente, seu palpite é menor que o numero sorteado")
            tentativa++
        } else if(palpite > numeroAleatorio){
            alert("Tente novamente, seu palpite é maior que o  numero sorteado")
            tentativa++
        } else{
            alert(`Você acertou na tentativa ${tentativa}`)
            return
        }
    }
}



verificarPalpite();
