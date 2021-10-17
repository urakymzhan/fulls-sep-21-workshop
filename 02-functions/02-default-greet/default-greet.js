// YOUR CODE BELOW

function defaultGreet(name, lastName){
    if(lastName === null || lastName === ''){
        lastName = 'Doe';
    }
    else if (name === null || name === ''){
        name = 'John';
    }
    var greeting = `Hi ${name} ${lastName} !.`
    return greeting;
}

var greet = defaultGreet('Sam', '' );
console.log(greet)