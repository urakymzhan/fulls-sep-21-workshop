// YOUR CODE BELOW

// Example working code:
function onlyOdds(onlyOdds) {
    if(onlyOdds < 1) return 0;
    var sumOfOdds = 0;

    for (var i = 0; i < onlyOdds; i++) {
        if(i % 2 !== 0) {
            sumOfOdds += i;
        }
    }
    return sumOfOdds;
}


// Work similarly with other folders