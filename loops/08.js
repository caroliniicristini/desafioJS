function quadrado(){

    let line = '';

    for(let i = 15; i <= 200; i++){

        line += (i * i) + ', '
 
    }

    console.log(line.slice(0, -2))  
}

quadrado()