function matriz(a){

   const b = []

    for(let i = 0; i < a.length; i++){

        const quadrado = a[i] * a[i]
        b.push(quadrado)
    }

    return b

}

// const listaA = [5, 5, 3, 2, 1, 0, 8, 9, 3, 1, 2, 3, 13, 14, 15];
// const listaB = matriz(listaA);
// console.log(listaB)