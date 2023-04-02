const repeatString = function(word,num) {
    //if the input number is negative, return 'ERROR'
    if (num < 0) return 'ERROR';

    //otherwise do loop
    //start with an empty string
    let string = "";
    //loop
    for (let i=0; i<num; i++) {
        string += word;
    };
    //return the result at the end
    return string;
};

// Do not edit below this line
module.exports = repeatString;
