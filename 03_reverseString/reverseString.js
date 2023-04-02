const reverseString = function(word) {
    //split the string and turn it into a new array
    splitWord = word.split("");
    //reverse array
    reverseArray = splitWord.reverse();
    //join all array elements into a string
    reverseWord = reverseArray.join("");
    //return reversed string
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
