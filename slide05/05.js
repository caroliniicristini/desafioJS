function validacaoTamanhos(){

    const a = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
    const b = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    if(a.length > 10 || b.length > 10){
        console.log("Lista fora dos padrões necessários")
        return
    }

    for(let i = 0; i < a.length; i++){

        if(a[i] % 2 !== 0 && a[i] % 3 !== 0){

           console.log(`O valor ${a[i]} não é permitido em 'a'`)

        }
    }

    for(let i = 0; i < b.length; i++){
        if(b[i] % 5 !== 0){
            console.log(`O valor ${b[i]} não é permitido em 'b'`)
        }
    }
}

validacaoTamanhos()