// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

<<<<<<< HEAD
function pyramid(n){
    const mid = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++){
        let level = '';

        for (let col = 0; col < 2 * n - 1; col++){
            if (mid - row <= col && mid + row >= col){
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
=======
function pyramid(n) {
    
    const midpoint = Math.floor((n * 2 - 1)/2);

    for ( let row = 0; row < n; row++){
        const data = [];
        for ( let col = 0; col < (n * 2) - 1; col++){
            if (midpoint - row <= col && midpoint + row >= col){
                data.push('#');
            } else {
                data.push(' ');
            }
        }
        console.log(data.join(''));
>>>>>>> aa3469d18b425bcf4e8de993bf4bbf0dec356879
    }
}

module.exports = pyramid;
