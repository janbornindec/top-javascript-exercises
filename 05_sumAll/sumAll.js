const sumAll = function(startNum, endNum) {
    //create a variable to hold finalSum
    let sum = 0;
    //for every number between the start and finish number
    //including start and finish number
    //add to sum
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
