
let numero = parseInt(prompt("Digite um numero "));


        if (numero % 3 === 0 && numero % 5 === 0) {       
            alert("Valor inválido");
        }
        else if (numero % 3 === 0) {
            alert("Valor dividido por 3");
        } 
        else if (numero % 5 === 0) {
            alert("Valor dividido por 5");
        } else{
            if(numero % 2 === 0){
                alert("É par")
            } else{
                alert("É impar")
            }
        }



