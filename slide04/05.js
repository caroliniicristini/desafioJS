function substring(palavra, posicaoInicial,posicaoFinal){

    let resultado = ''

        for(i = posicaoInicial; i < posicaoFinal; i++){
         resultado += palavra[i];
    }

    return resultado

} 

console.log(substring("Carol", 2, 4))