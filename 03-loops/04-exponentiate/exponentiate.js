// YOUR CODE BELOW

function exponentiate(base, power) {
    let expTemp=1;

    if (power === 0) {
        return 1;
    }
   do{
           expTemp *= base;
           power -= 1;
    } while(power>=1);
    return expTemp;
}

const exp = exponentiate(5, 2);
console.log(exp)