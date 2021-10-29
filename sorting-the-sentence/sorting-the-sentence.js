/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
   s = s.split(' ')
  let result = [];
  for(var j = 1; j < s.length+1; j++) {
      for(var i = 0; i <= s.length-1; i++) {
      if(s[i].includes(j.toString())) {
          result.push(s[i].slice(0,s[i].length-1))
      }
  }
  }

    return result.join(' ');
};