function imparPar(){

    a = [1, 4, 5, 6, 7, 8, 9, 10, 11, 7, 8, 9, 10, 11, 7, 8, 9, 10, 11, 4, 5, 6, 7, 8,, 10, 11, 100, 10, 11, 300, 301, 403, 201, 103, 384, 583, 384]
    let impar = 0;
    let par = 0

    for(let i = 0; i < a.length; i++){

        if(a[i] % 2 == 0){
           par++
    } else {
        impar++
    }
  
}
return `A lista recebida possui ${par} elementos pares e ${impar} elementos ímpares`;
}

console.log(imparPar())

