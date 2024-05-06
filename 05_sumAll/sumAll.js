const sumAll = function(rangeVal1, rangeVal2) {    
    if(typeof(rangeVal1)!= "number" || typeof(rangeVal2)!== "number" || rangeVal1 < 0 || rangeVal2 < 0) {
        return "ERROR";
    }
    let lowerBound=Math.min(rangeVal1, rangeVal2);
    let upperBound = lowerBound === rangeVal1 ? rangeVal2 : rangeVal1; 
    let totalSum = 0;
    for(lowerBound; lowerBound<=upperBound; lowerBound++) {
        totalSum += lowerBound;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
