function percentualImpares(){

    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    let impar = 0;

    for(i = 0; i < a.length; i++){

        if(a[i] % 2 !== 0){
            impar++;
    }
}
const porcentagem = (impar / a.length) * 100;
console.log(`o total de valores impares é ${impar} e corresponde a ${porcentagem}% da lista`)

}

percentualImpares()

//o total de valores impares é x e corresponde a x% da lista