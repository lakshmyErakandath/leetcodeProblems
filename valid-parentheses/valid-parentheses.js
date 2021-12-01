/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split('');
    if(s.length === 1) {
        return false;
    }
    let parens = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    let stack = [];
    for(let i = 0; i < s.length; i++) {
       if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
           stack.push(s[i]);
       }else if(s[i] === ")" && stack[stack.length-1] === parens[s[i]]
               ||s[i] === "}" && stack[stack.length-1] === parens[s[i]]
               ||s[i] === "]" && stack[stack.length-1] === parens[s[i]]) {
           stack.pop();
       }else {
           return false;
       }
    }
    if(stack.length === 0) return true;
    else return false;
};
