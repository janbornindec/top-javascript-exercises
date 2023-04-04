//Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:
//Leap years are years divisible by four (like 1984 and 2004).
//However, years divisible by 100 are not leap years (such as 1800 and 1900)
//unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).

const leapYears = function(year) {
    //determine if year is divisible by 4
    if (year % 4 === 0) {
        //if year is divisible by 4 and 100
        if (year % 100 === 0) {
            //if year is divisible by 4, 100 and 400
            if (year % 400 === 0) {
                return true;
            } else { //if year is divisible by 4 and 100, but not 400
                return false;
            };
        } else { //if year is divisible by 4 but not 100 
            return true;
        };
    } else { //otherwise returns false
        return false;
    };

    //or
    //return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
