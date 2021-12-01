/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === "") {
        return 0;
    }
    let index = -1;
    if(haystack.includes(needle)){
        index = haystack.indexOf(needle);
    }
    return index;
    
};