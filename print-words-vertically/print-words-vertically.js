/**
 * @param {string} s
 * @return {string[]}
 */
/**
 * @param {string} s
 * @return {string[]}
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    s = s.split(' ');
    let result = [];
    let maxLength = findMaxLength(s);
    for(var i = 0; i < maxLength; i++) {
      let str = "";
        for(var j = 0; j < s.length; j++) {
          if(s[j][i] === undefined) {
            str +=  " ";
            continue
          } else {
            str+= s[j][i];
          }
        }
  result.push(partialTrim(str));
    }
    return result;


};
var findMaxLength = function(array) {
    let maxLength = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i].length > maxLength) {
            maxLength = array[i].length;
        }
    }
    return maxLength;
}

var partialTrim = function(word) {
  word = word.split('');
  let characterFound = false;
  for(var i = word.length-1; i >= 0; i--) {
    if(word[i] === ' ') {
      continue;
    } else {
      characterFound = true;
    }
    if(characterFound === true) {
      word = word.slice(0, i+1);
      return word.join('');
    }
  }
}
// console.log(printVertically("TO BE OR NOT TO BE"))
// T O
// B E
// O R
// N O T
// T O
// B E