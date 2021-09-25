/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   if(x === 0) {
        return 0;
    }
    let num = Math.abs(x).toString();
    let numberReverse = Number(num.split('').reverse().join(''));
    if(numberReverse > 2 **31) return 0;
    if(x > 0) {
        return Number(numberReverse);
    }else {
        return Number(-numberReverse);
    }
    
};