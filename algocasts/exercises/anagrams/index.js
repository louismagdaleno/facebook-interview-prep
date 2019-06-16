// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const mapA = new Map();
    const mapB = new Map();
    const regex = /^[a-zA-Z]/;

    for (let val of stringA){
        if (regex.test(val)){
            mapA.set(val, (mapA.get(val) + 1) || 1);
        }
    }

    for (let val of stringB){
        if (regex.test(val)){
            mapB.set(val, (mapB.get(val) + 1) || 1);
        }
    }

    if (mapA.size !== mapB.size){
        return false;
    }

    for (let key in mapA){
        if (!mapB.has(key)){
            return false;
        }
        if (mapB.get(key) !== mapA.get(key)){
            return false;
        }
    }

    return true;

}

module.exports = anagrams;
