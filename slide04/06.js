function stringRepeat(palavra, quantidade){

    let res = ''

    for(let i = 0; i < quantidade; i++){
        res = palavra.repeat(quantidade)
    }
    console.log(res)

}

stringRepeat("Oi, eu sou um teste de repetição \n", 2)