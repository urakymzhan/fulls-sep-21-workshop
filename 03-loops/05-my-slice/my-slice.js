// YOUR CODE BELOW

function mySlice(originalString, startIdx =0, endIdx = originalString.length) {
    let tempString = originalString.substring(startIdx, endIdx);
    return tempString;
}

const exp = mySlice('slice and dice',2);
console.log(exp)