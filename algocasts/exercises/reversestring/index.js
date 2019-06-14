// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    if (!str){
        return null;
    }

    if (str.length === 1){
        return str;
    }

    let reversed = str.split('').reverse().join('');

    return reversed;
}

module.exports = reverse;
