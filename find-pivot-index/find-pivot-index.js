// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var pivotIndex = function(nums) {
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     let leftSum = 0;
//     let rightSum = 0;
//     for(let i = 0; i < nums.length; i++) {
//         leftSum += nums[i];
//         if(leftSum !== rightSum) {
//             rightSum = sum - leftSum;
//         }else {
//             return i;
//         }
//     }
//     return -1;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let leftSum = 0;
    let rightSum = sum;
    for(let i = 0; i < nums.length; i++) {
        rightSum  -= nums[i];
        if(leftSum === rightSum) {
            return i;
        } 
        
        leftSum += nums[i]; 
        
    }
    return -1;
};