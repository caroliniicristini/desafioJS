function increment(){

    const lista = []

    for(let i = 0; i < 10; i++){
        let elemento = prompt("Digite um elemento")
      
        if(typeof elemento === "string" && elemento[i].length > 7){
    
            console.log("Não foi possível inserir este valor")
        } else {
            lista.push(elemento)
            console.log(`Elemento inserido com sucesso, agora a lista é: ${lista}`)
        }
    }
}

increment()