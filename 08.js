function quadrado(){

    let space = '';

    for(let i = 15; i <= 200; i++){

        space += (i * i) + ','

    }

    console.log(space.slice(0, -2))
    
}

quadrado()