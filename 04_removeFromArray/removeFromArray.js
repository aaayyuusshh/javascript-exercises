const removeFromArray = function(originalArray, ...elementToRemove) {
    // using for of loop
    // const modifiedArray = [];
    // for(const element of originalArray)  {
    //     if (!elementToRemove.includes(element)) 
    //         modifiedArray.push(element); 
    // }
   
    // using filter
    const modifiedArray =  originalArray.filter((element) => {
        return !elementToRemove.includes(element)
    });
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
