/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    
    while(low <= high) {
        let midpoint = Math.floor((low + high)/2);
        if(nums[midpoint] === target) {
            return midpoint;
        }
        if(nums[midpoint] < target) {
            low = midpoint + 1;
        }
        if(nums[midpoint] > target) {
            high = midpoint - 1;
        }
    }
    return low;
};