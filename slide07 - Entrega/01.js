function cubo10(){

let numeros = []

    for(let i = 0; i < 10; i++) {
        let resultado = Math.pow(i, 3)
        numeros.push(resultado)
    }
   return numeros

}

const cubo = cubo10()
console.log(cubo)
