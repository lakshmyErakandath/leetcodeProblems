/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(' ');
        for(var i = s.length-1; i >= 0; i--) {
            if(s[i] === ''){
                continue;
            }else {
                return s[i].length;
            }
        }
    }