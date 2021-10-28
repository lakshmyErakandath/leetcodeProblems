/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let diff = 0;
    for(var i = 0; i < s.length; i++) {
        if(s[i] === "R") {
            diff++;
        } else {
            diff--;
        }
        if(diff === 0) {
            count++;
        }
    }
    return count;


};