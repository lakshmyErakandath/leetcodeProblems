/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let result = "";
    for(var i = 0; i < address.length; i++) {
        if(address[i] === ".") {
            result+="[" + address[i] + "]"
        }else {
            result+= address[i];
        }
    }
    return result;
    
};