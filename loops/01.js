// const states = [
//     'Alabama',
//     'Alaska',
//     'Arizona',
//     'Arkansas',
//     'California',
//     'Colorado',
//     'Connecticut',
//     'Delaware',
//      'Florida',
//      'Georgia'
// ];

// for (let i = 1; i <= states.length; i++){
//     console.log(states[states.length - i])
// }

// for(let i = states.length - 1; i <= 0; i++){
//     console.log(states[states.length - i])
// }

// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

// for(let i = 10; i >= -5; i--){
//     console.log(i)
// }

// for(let i = 9; i >= -30; i -= 3){ 
//     console.log(i)
// }
// let n = 1;

// while(n < 1){   
//     console.log(n)
//     n++

    //adicionar +1
// }

// console.log("O loop acabou")


//SLICE: sequencia.slice(inicio, fim);
// 0 é o índice onde o corte começa (no início da string).
// -2 é o índice onde o corte termina, contando de trás para frente a partir do final da string. Ele indica para cortar dois caracteres antes do final.


function renderUpToTwnty(){

    let line = ''

    for(let i = 0; i <= 20; i++){
       line += i + ', '
    }

    console.log(line.slice(0, -2))
}
renderUpToTwnty()