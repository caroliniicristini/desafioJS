// function somaNotas(){

//     let n1 = parseInt(prompt("Digite sua primeira nota:"))
//     let n2 = parseInt(prompt("Digite sua segunda nota:"))

//     let soma = (n1 + n2) / 12

//     soma.toFixed(2)

//     alert(`A soma dessas notas anual é: ${soma}`)
// }

// somaNotas()

function somaNotas(n1, n2){

    let soma = (n1 + n2) / 12

    console.log(`A soma dessas notas anual é: ${soma.toFixed(2)}`)
}
somaNotas(10, 8.5)