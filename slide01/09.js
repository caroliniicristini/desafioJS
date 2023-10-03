// function triangulo(b,h){

//     let a = (b * h)/2

//     console.log(a)

// }

// triangulo(10,20)

function triangulo(){

    let base = prompt("Digite o valor da base:")
    let altura =  prompt("Digite o valor da altura")

    let area = (base * altura) / 2

    alert(`A área do triangulo é: ${area}`)
}

triangulo()