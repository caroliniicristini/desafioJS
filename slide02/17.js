function candidato(){

    let candidatoA = 0;
    let candidatoB = 0;
    let candidatoC = 0;

    while(true){
        let voto = prompt("Digite a letra do seu candidato: A, B ou C")
    
        voto = voto.toLocaleUpperCase()
    
      if(voto === "X"){
            alert(`Candidato A: ${candidatoA} \n Candidato B: ${candidatoB} \n Candidato C: ${candidatoC}`)
            return;
        }

        switch (voto) {
            case "A": 
                candidatoA++
                alert("Voto registrado com sucesso")
                break;
            
            case "B": 
                candidatoB++
                alert("Voto registrado com sucesso")
                break;
            
            case "C": 
                candidatoC++
                alert("Voto registrado com sucesso")
                break;
            
            default: 
                alert("Candidato não encontrado")
        }
    
  
    
    }
  

}

candidato()