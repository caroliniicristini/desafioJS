function incrementTextBackwards(string){

    for(i = string.length; i >= 0; i--){
        console.log(string.substring( i))
    }

}

incrementTextBackwards('FullStack')