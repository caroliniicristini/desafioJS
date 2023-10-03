function conta(){

    let soma = 0;
    let cont = 0;

    while(true){
        let numero = parseInt(prompt("Digite um numero de 0 à 10"))
        cont++
    
        if(numero < 0 || numero > 10){
            break;
        }
        soma += numero
        cont++   
    } 

    if(cont > 0){
        let  media = soma / cont
         alert(`A média é: ${media.toFixed(2)} \n A soma é: ${soma}`)
    } alert(`${media}`)

   
}  

conta()