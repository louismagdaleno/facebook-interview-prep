// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
function divisibleByThree(n){
    return n%3 === 0;
}

function divisibleByFive(n){
    return n%5 === 0;
}

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++){
        let output;

        // divisible by 3 & 5
        if (divisibleByFive(i) && divisibleByThree(i)){
            output = 'fizzbuzz';
        }

        // divisible by 3
        else if (divisibleByThree(i)){
            output = 'fizz'
        }

        // divisible by 5
        else if (divisibleByFive(i)){
            output = 'buzz';
        }

        else {
            output = i;
        }

        console.log(output);
    }
}

module.exports = fizzBuzz;
