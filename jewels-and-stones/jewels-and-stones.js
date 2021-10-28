/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    stones = stones.split('');
    for(var i = 0; i < stones.length; i++) {
        if(jewels.includes(stones[i])) {
            count++;
        }
    }
    return count;
};