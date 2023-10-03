//sequencia fibonacci
// 0, 1, 1, 2, 3, 5, 8

function fibonacciNumbers(){

    let a = 0
    let b = 1
    let nextNumber; 
    let line = ''

    for(let i = 2; i < 15; i++) {
       
     nextNumber = a + b 

     a = b
     b = nextNumber 

     line += nextNumber + ", "

    }

    console.log(line.slice(0, -2))
}

fibonacciNumbers()
// atual -> valor atual do contador do laço
// anterior -> valor anterior do contador 
// proximo -> valor seguinte do contador