function divisoresPorQuatro(){

    line = ""

    for(let i = 0; i <= 200; i+= 4){

        line += i + ", "
    }
  
    console.log(line.slice(0, -2))

}

divisoresPorQuatro()