/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    s = s.split(' ');
   // let result = [];
    return s.slice(0, k).join(' ');
};