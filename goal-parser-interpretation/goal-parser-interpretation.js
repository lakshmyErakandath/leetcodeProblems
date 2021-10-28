/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    command = command.split('');
    console.log(command)
    let str = "";
    for(var i = 0; i < command.length; i++) {
        if(command[i] === "(" && command[i+1] === ")") {
            str+= "o";
            i++;
        }else if(command[i] === "(" && command[i+1] === "a") {
            str+= "al";
            i+=3;
        }else {
            str+=command[i];
        }
    }
    return str;
    
};