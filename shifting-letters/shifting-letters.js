/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    var shifted = [];
    let sum = 0;
  var charcodebase = 'a'.charCodeAt(0);
  for(var i = shifts.length-1; i >= 0; i--) {
    sum +=  shifts[i];
    var char = ((s.charCodeAt(i)  - charcodebase + sum) % 26) + charcodebase ;
    shifted.push(String.fromCharCode(char));
  }
  return shifted.reverse().join('');
};