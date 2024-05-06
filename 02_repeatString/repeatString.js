const repeatString = function(stringToRepeat, numOfTimes) {
    if(numOfTimes < 0) return "ERROR";
    return stringToRepeat.repeat(numOfTimes);
};

// Do not edit below this line
module.exports = repeatString;
