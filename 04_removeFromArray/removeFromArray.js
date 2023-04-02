const removeFromArray = function(arr,...nums) {
    //for each number in nums, splice it out of the array
    for (let i=0; i<nums.length;i++) {
        //find out the index of each number in nums
        let index = arr.indexOf(nums[i]);
        //if number is found in array
        if (index != -1) arr.splice(index,1);
        //take each number out of array using splice
    };

    //return the new array at the end
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;