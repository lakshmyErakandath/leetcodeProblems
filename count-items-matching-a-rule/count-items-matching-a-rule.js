/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let obj = {
        type:0,
        color:1,
        name:2
    }
    let count = 0;
    for(var i = 0; i < items.length; i++) {
        let index = obj[ruleKey];
        if(items[i][index] === ruleValue) {
            count++;
        }
    }
    return count;
};