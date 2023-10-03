function removeEspacos(texto){

    let semEspaco = ''

    for(let i = 0; i < texto.length; i++){
        if(texto[i] !== ' ' ){
            semEspaco += texto[i];
        }

    }

    console.log(semEspaco);

}

removeEspacos("Não restará espaços em branco")