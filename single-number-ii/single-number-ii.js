/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let one = 0;
    let two = 0;
    for(var i = 0; i < nums.length; i++) {
        one = (one ^ nums[i] & ~two);
        two = (two ^ nums[i] & ~one);
    }
    return one;
};