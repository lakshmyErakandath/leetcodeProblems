/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let start = strs[0];
    for(let i = 0; i <start.length; i++) {
        let character = start[i];
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== character) return prefix;
        }
        prefix += character;
    }
    return prefix;
};