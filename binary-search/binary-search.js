/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let first = 0;
    let last = nums.length-1;

    
    while(first <= last) {
    let midpoint = Math.floor((first + last)/2);
        // midpoint = Math.floor(first + last)/2;
        if(nums[midpoint] === target) {
            return midpoint;
        }
        if(target > nums[midpoint]) {
            first = midpoint + 1;
        }
        if(target < nums[midpoint]) {
          last = (midpoint - 1);
        }
        
    }
    return -1;
};