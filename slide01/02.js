// function soma(n1, n2, n3){
    
//     const resultado = n1 + n2 + n3;

//     console.log(resultado)
// }

// soma(5,10, 20)

function soma(){

    let n1 = parseInt(prompt("Digite o primeiro numero"))
    let n2 = parseInt(prompt("Digite o segundo numero"))
    let n3 = parseInt(prompt("Digite o terceiro numero"))

    const resultado = n1 + n2 + n3

    alert(`A soma desses números é: ${resultado}`)

}

soma()