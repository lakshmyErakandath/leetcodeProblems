/**
 * @param {string} sentence
 * @return {boolean}
 */

//solution -1
//-----------------
var checkIfPangram = function(sentence) {
    sentence = sentence.split('');
    let set = new Set(sentence);
    
    return set.size === 26;
}

// solution -2
//---------------------
// var checkIfPangram = function(sentence) {
//     let letters = "abcdefghijklmnopqrstuvwxyz";
//     letters = letters.split('')
//     for(var i = 0; i < sentence.length; i++) {
//         if(letters.includes(sentence[i])) {
//             let index = letters.indexOf(sentence[i]);
//             letters.splice(index,1);
//         }
//     }
//     if(letters.length === 0) {
//         return true;
//     }else {
//             return false;
//     } 
// };

