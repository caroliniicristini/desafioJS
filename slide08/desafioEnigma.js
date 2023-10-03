function contarPalavras(texto){

    let numeroPalavra = 1;

    for(let i=0; i < texto.length; i++){

        const letra = texto[i];

        if(letra < 'a' || letra > 'z'){
            numeroPalavra++
        }
    }
    
    return numeroPalavra
}
