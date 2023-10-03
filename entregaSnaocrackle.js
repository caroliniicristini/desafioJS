function snapCrackle(maxValue){

    let string = '';

    for(let i = 1; i <= maxValue; i++){

        if(i % 2 !== 0){
            string += 'Snap'
        }
        if(i % 5 === 0){    

              if (string !== '') {
                string += ', ';
            }
            string += 'Crackle'
        }
        if(i % 2 !== 0 && i % 5 === 0){ 

            if (string !== '') {
                string += ', ';
            }
            string += 'SnapCrackle'
        }
        if(i  % 2 === 1 && i % 5 !== 0){
            
            if (string !== '') {
                string += ', ';
            }
            string += i;
        }
    }
    return string
}

console.log(snapCrackle(15))