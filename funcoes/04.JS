function divisao(){


    let n1 = prompt("Digite um numero")
    let n2 = prompt("Digite outro numero")

    let divisao = n1 / n2

    if(divisao % 1 === 0){
        alert("Esta é uma divisão exata")
    } else {
        alert(`Esta é uma divisão inexata e o resto é ${divisao.toFixed(2)}`)
    }

}

divisao()