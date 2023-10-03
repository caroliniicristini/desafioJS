function tenIntenToHundred(){

    let line = ''

    for(let i = 10; i <= 100; i += 10){
        line += i + ', '
    }

    console.log(line.slice(0, -2))
}

tenIntenToHundred()