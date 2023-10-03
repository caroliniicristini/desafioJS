

    let valor;
    let txt;

   while (true) {

    txt = parseInt(prompt("Digite um valor de 0 a 10:"));
    
   if( txt > 10){

      valor = txt;
      alert("Valor inválido, tente novamente")

    }else{
      break;
    }
  }
