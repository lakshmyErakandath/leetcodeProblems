/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
   var result = nums.sort(function(a, b) {
       //create str1 for ab
       var str1 = '' + a + b;
       //create str2 for ba
       var str2 = '' + b + a;
       if(str1 === str2) {
           return 0;
       }
       //if str1 is greater than str2 then sort in descending else dont sort 
       return str1 > str2 ? -1 : 1;
   })
   if(result.join('')[0] === '0') {
       return '0';
   }else {
       return result.join('');
   }
};
