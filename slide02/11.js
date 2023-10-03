//resultado da soma e da média dos valores PARES entre 50 e 70

function mediaAritmetica(){

 
    let somaPares = 0;
    let contadorPares = 0;
    let line = '';

    for(i = 50; i <= 70; i++){

        //verifica se é par
        if(i % 2 === 0){

            //soma da média dos valores pares
            somaPares += i
            contadorPares++
            line += i + ' + ';
        }
    }
  
    const media = somaPares / contadorPares

    console.log(`A soma é ${somaPares} e a média é de ${media}`)
 
}

mediaAritmetica() 