/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    letters = letters.split('')
    for(var i = 0; i < sentence.length; i++) {
        if(letters.includes(sentence[i])) {
            let index = letters.indexOf(sentence[i]);
            letters.splice(index,1);
        }
    }
    if(letters.length === 0) {
        return true;
    }else {
            return false;
    } 
    
};