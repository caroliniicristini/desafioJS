function textoCriptografado(texto){

    let strings = '';

    for(let i = 0; i < texto.length; i++){
        switch(texto[i].toLowerCase()){
            case 'a' : 
                strings += 'x'
                break;
            case 'e':
                strings += 'y'
                break;
            case 'i':
                strings += 'w'
            case 'o':
                strings += 'k'
                break;
            case 'u':
                strings += 'z'
                break;
            default:
                strings += texto[i]
                break;
        }
    }

    console.log(strings)
 
}

textoCriptografado("Uma frase Ultra secreta que precisa ser criptografada")