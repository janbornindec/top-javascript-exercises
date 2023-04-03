const sumAll = function(startNum, endNum) {
    //create a variable to hold finalSum
    let sum = 0;

    //check if they are numbers
    if (typeof endNum === "number" && typeof startNum === "number") {
        //if both numbers are positive
        //run loop to add all numbers between endNum and startNum
        if (endNum > 0 && startNum > 0) {
            if (endNum < startNum) {
                for (let i = startNum; i >= endNum; i--) {
                    sum += i;
                }
                return sum;
            } else {
                for (let i = startNum; i <= endNum; i++) {
                    sum += i;
                }
                return sum;
            };
        //if any of the numbers is negative return 'ERROR'
        } else {
            return 'ERROR';
        };
    //if not numbers then return 'ERROR'
    } else {
        return 'ERROR';
    };

};

// Do not edit below this line
module.exports = sumAll;
