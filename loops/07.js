 function toSquare(){

    let line = ''

    for(let i = 1; i <= 10; i++){

        line += (i * i) + ', '
      
    }
    console.log(line.slice(0, -2))
 }

 toSquare()