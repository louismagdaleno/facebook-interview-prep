// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function isAlpha(char){
    const regex = /^[a-zA-Z]/;

    return regex.test(char);
}

function buildCharMap(str){
    const map = new Map();
    
    for (let val of str){
        if (isAlpha(val)){
            map.set(val, (map.get(val) + 1) || 1);
        }
    }

    return map;
}

function isEqualSize(a,b){
    return a.size === b.size;
}

function anagrams(stringA, stringB) {
    const mapA = buildCharMap(stringA);
    const mapB = buildCharMap(stringB);
    

    if (isEqualSize(mapA, mapB)){
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

function cacheMe(fn){
    const cache = {};

    return (n) => {
        if (cache[n]){
            return cache[n];
        } else {
            cache[n] = fn(n);
            return cache[n];
        }
    };
};

const fib = cacheMe((n) => {
    if (n < 2){
        return 1;
    } 
    return fib( n - 1) + fib(n - 2);
});

// reverse a string using recursion
class ReverseString {
    reverse = str => {
        if (str.length === 0){
            return str;
        }
        return this.reverse(str.slice(1)) + str[0];
    };
};

function reverseString(str){
    let temp = [];

    for (let i = str.length -1; i > 0; i--){
        temp.push(str[i]);
    }

    return temp.join('');
}

function reverseStr(str){
    let temp;

    
}

module.exports = anagrams;
