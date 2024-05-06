const reverseString = function(stringToReverse) {
    // via built in methods
    // let arrToReverse = stringToReverse.split("");
    // let reversedArray = arrToReverse.reverse();
    // let reversedString = reversedArray.join("");

    // via manual implementation
    let reversedString = "";
    for(let i=0; i<stringToReverse.length; i++) {
        reversedString+= stringToReverse[stringToReverse.length-1-i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
