/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k >= nums.length) {
        k = k% nums.length;
    }
    var temp = new Array(k);
    var j = 0;
    for (var i= nums.length-k;i < nums.length;i++) {
        temp[j++] = nums[i];
    }
    
    for (var i= nums.length-1-k;i >= 0  ; i--) {
        nums[i+k] = nums[i];
    }
    
    for (var i=0 ; i < k;i++) {
        nums[i] = temp[i];
    }
};