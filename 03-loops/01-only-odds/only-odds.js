// YOUR CODE BELOW

// Example working code:
function onlyOdd(arg) {
    let sumOfOdds = 0;
    if (arg <= 0) {
        return 0;
    } else {
        for (var i = arg; i > 0; i--) {
            if (i % 2 !== 0) {
                sumOfOdds += i;
            }
        }
        return sumOfOdds;
    }
}
