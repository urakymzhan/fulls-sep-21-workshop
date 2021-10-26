// YOUR CODE BELOW

function bacteriaTime(currentNum, targetNum) {
    var time=0;
    var alert = 'targetNum must be larger than currentNum';
    if (targetNum < currentNum) {
        return alert;
    }
    while(targetNum>currentNum){
        
            time += 20;
            targetNum /= 2;
        
    }
    return time;
}

const bacteria = bacteriaTime(1, 80);
console.log(bacteria)