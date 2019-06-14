// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const counts = new Map();
    let max;

    for (let val of str){
       counts.set(val, (counts.get(val) + 1) || 1);
       
       if (counts.size === 1){
           max = val;
       }

       counts.get(val) > counts.get(max) ? max = val : null;
    }

    return max;


}

module.exports = maxChar;
