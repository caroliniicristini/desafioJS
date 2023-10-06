function add(n1, n2){
    return n1 + n2
}

console.log(add(3, 6))


function multiply(arg1, agr2){

    let resultado = 0;
    for(let i = 0; i < agr2; i++){
       resultado = add(resultado, arg1)
    }
    return resultado
}
console.log(multiply(3, 6))

function power(x, n){
    let r = 1

    for(let i = 0; i < n; i++){
        r = multiply(r, x)
    }
    return r
}

console.log(power(5, 3))