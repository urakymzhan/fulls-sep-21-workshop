// YOUR CODE BELOW

function defaultGreet(name = 'John', lastName = 'Doe'){
    var greeting = `Hi ${name} ${lastName} !.`
    return greeting;
}

var greet = defaultGreet('Sam' );
console.log(greet)