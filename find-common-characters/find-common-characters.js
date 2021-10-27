/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let arr = words[0].split("");
    let arr1 = [];
    for (let i = 1; i < words.length; i++) {
        let word = words[i].split("");
        for (let j = 0; j < arr.length; j++) {
            if (word.includes(arr[j])) {
                let index = word.indexOf(arr[j]);
                word[index] = null;
            } else {
                arr[j] = null;
            }
        }
    }
    arr.forEach(item=>{
        if(item !== null){
            arr1.push(item);
        }
    })
    return arr1;
};