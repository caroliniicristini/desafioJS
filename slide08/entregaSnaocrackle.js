function snapCrackle(maxValue){

    let string = '';

    for (let i = 1; i <= maxValue; i++) {
        if ((i  % 5 === 0) && (i % 2 == 1)) {
            string += "SnapCrackle, "
        } else if (i  % 5 === 0) {
            string += "Crackle, "
        } else if (i % 2 == 1) {
            string += "Snap, "
        } else {
            string += (i + ",")
           }
    }
    return string
}

console.log(snapCrackle(3))                         