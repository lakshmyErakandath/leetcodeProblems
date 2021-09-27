/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     let result = {}
    for(var i = 0; i < nums.length; i++) {
      var count = 0;
        for(var j = 0; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                count++
               result[nums[i]] = count;
            }
        }
    }
    for(var vals in result) {
      if(result[vals] === 1) {
        return vals;
      }
    }
};