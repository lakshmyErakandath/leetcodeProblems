/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 0;
    while (true) {
        x -= (1 + i * 2);
        if (x < 0) return i;
        i += 1;
    }
};