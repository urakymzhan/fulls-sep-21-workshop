// YOUR CODE BELOW

function crazyCaps(word) {
    let crazyString = "";
    crazyString += word[0].toLowerCase();
    for (var i = 1; i < word.length; i++) {
        if(i % 2 !== 0) {
            crazyString += word[i].toUpperCase();
        }
        else{
            crazyString += word[i];
        }
    }
    return crazyString;
}

const caps = crazyCaps('Alexander');
console.log(caps)