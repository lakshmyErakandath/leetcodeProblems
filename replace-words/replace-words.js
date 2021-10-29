/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
   sentence = sentence.split(' ')
  for(var i = 0 ; i < sentence.length; i++) {
    for(var j = 0; j < dictionary.length; j++) {
      // console.log(sentence[i]);
            // console.log(dictionary[j]);

      if(sentence[i].slice(0,dictionary[j].length).includes(dictionary[j])) {
        sentence[i] = dictionary[j];
      } 
    }
  }
  return sentence.join(' ');
    
};