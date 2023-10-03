function padEnd(palavra, quantidade, caracterRepeticao){

    if(quantidade <= palavra){
        return palavra

    }
    
    let resultado = palavra

    for(i = 0 ; i < quantidade ; i++){
        resultado += caracterRepeticao 
    }

    return resultado
}

const resultado = padEnd("Lucas", 2, "foo");
console.log(resultado); 





