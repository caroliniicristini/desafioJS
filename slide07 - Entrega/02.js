function divisiveisPor(limite, divisor){

  
    for(let i = 1; i <= limite; i++){
        
        if(i % divisor === 0){
            console.log(i)
        
        }
    }
}

divisiveisPor(100, 10)

