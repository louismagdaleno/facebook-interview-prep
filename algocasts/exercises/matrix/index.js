// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];

    for (let i = 0; i < n; i++){
        results.push([]);
    }

    let counter = 1;

    let SC = 0;
    let SR = 0;

    let EC = n - 1;
    let ER = n - 1;

    while ( SC <= EC && SR <= ER){

        // top row
        for (let i = SC; i <= EC; i++){
            results[SR][i] = counter;
            counter++;
        }
        SR++;

        // right col
        for (let i = SR; i <= ER; i++){
            results[i][EC] = counter;
            counter++;
        }
        EC--;

        // bottom
        for (let i = EC; i >= SC; i--){
            results[ER][i] = counter;
            counter++;
        }
        ER--;

        // left col
        for (let i = ER; i >= SR; i--){
            results[i][SC] = counter;
            counter++;
        }
        SC++;

       

    }

    return results;
}

module.exports = matrix;
