/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  s = s.split('');
  let arr = [];
    for(var i = 0; i < indices.length; i++) {
      arr[indices[i]] = s[i];
    }
    return arr.join('');
};