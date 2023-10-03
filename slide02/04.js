 function evenUpToTwenty(){

    line = ''

    for(let i = 0; i <= 20; i++){

        if(i % 2  === 0){
            line += i + ', '
        }
    }
    console.log(line.slice(0, -2))
 }

evenUpToTwenty()