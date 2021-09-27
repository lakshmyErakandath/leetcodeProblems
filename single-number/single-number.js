/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = {}
    for(let num of nums) {
        result[num] = result[num] +1 || 1
    }
    for(var vals in result) {
      if(result[vals] === 1) {
        return vals;
      }
    }
};

// time and space complexity : O(N) 
