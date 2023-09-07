function inDescendingDirection(){

    let line = '';

    for(let i = 10; i >= 0; i--){
        
        line += i + ', ';

    }
    console.log(line.slice(0, -2))
    
}

inDescendingDirection()