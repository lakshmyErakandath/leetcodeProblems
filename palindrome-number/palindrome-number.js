/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     y = x.toString().split('').reverse().join('');
    if(x === Number(y)) {
      return true;
    }else {
      return false;
    }
};