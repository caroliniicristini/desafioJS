const elevador = {
    andarAtual: 0,
    totalDeAndares: 10,
    capacidade: 2,
    ocupacaoAtual: 3,
  };
 
 function entrar(elevador){
    if(elevador.ocupacaoAtual < elevador.capacidade){
        elevador.ocupacaoAtual++;
        return `Ocupação atual em ${elevador.ocupacaoAtual}`
        
    } else{
        return `Elevador lotado`
    }
}

// console.log(entrar(elevador));

function sair(elevador){
    if(elevador.ocupacaoAtual > 0){
        elevador.ocupacaoAtual--;
        return `Ocupação atual em: ${elevador.ocupacaoAtual}`
    }
}
// console.log(sair(elevador))

function subir(elevador){
     if(elevador.andarAtual < elevador.totalDeAndares){
        elevador.andarAtual++;
        return `Estamos no andar ${elevador.andarAtual}`
     } else{
        return `O elevador já se encontra no ultimo andar`
     }
}

// console.log(subir(elevador))
//resultado com incremento +1

function descer(elevador){
    if(elevador.andarAtual > 0){
        elevador.andarAtual--;
        return `Estamos no andar: ${elevador.andarAtual}`
        
    } else{
        return `O elevaodr ja se encontra no terreo`
    }
}


console.log(descer(elevador))
