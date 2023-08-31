 function toSquare(){

    let space = ''

    for(let i = 1; i <= 10; i++){

        space += (i * i) + ', '
      
    }
    console.log(space.slice(0, -2))
 }

 toSquare()