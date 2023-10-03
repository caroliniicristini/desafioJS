function verificacao(){

    let nome = prompt("Digite o nome do seu usuário")
    let senha = prompt("Digite sua senha")

    while(senha === nome){

    
        alert("Digite uma senha diferente do seu nome")

         senha = prompt("Digite uma nova senha")
   
    }

    alert("Login feito com sucesso!")
}

verificacao()