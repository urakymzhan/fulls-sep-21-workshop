// YOUR CODE BELOW

function myIndexOf(source, searchValue, startIdx = 0) {
    if (source.includes(searchValue)) {
        for (let i = 0; i < source.length; i++) {
            if (source[i] == searchValue[0] && i > startIdx) {
                return i;
            }
        }
    }
    return -1;
}

const exp = myIndexOf('hello', 'sad');
console.log(exp)