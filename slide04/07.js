function stringCentralize(string, quantidade, repeticao){

    let novaString;

    novaString = string

    for(let i = repeticao; i <= quantidade; i++){

        novaString += repeticao.repeat(i)
        console.log(novaString)

    }

    console.log(novaString)

} 

stringCentralize("oi", 6, ".")