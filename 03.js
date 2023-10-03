 const televisao = {
    canalAtual: 3,
    volume: 0
 }


 function aumentarVolume(televisao){
   

    if(televisao.volume < 10) {

        televisao.volume++;
        return `Volume está em: ${televisao.volume}`
        
    } else{
        return `Volume no maximo`
       
    }
 }

//  console.log(aumentarVolume(televisao))

function diminuirVolume(televisao){
    televisao.volume--

    if(televisao.volume > 0){
        return `Volume esta em: ${televisao.volume}`
      
    } else { 
        return `Volume no minimo`
    }
}

// console.log(diminuirVolume(televisao))

function mudarCanalPraCima(televisao){

      if(televisao.canalAtual <= 1){
        televisao.canalAtual++;
        return `Este é o primeiro canal`
      } else{
        return `O canal atual é: ${televisao.canalAtual}`
      }
}


// console.log(mudarCanalPraCima(televisao))


function consultarCanal(televisao){
    return televisao.canalAtual
}

// console.log(consultarCanal(televisao))

function consultarVolume(televisao){
    return televisao.volume
}

// console.log(consultarVolume(televisao))
