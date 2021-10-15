// YOUR CODE BELOW

var firstName = prompt("Hello, what is your name?");
var lastName = prompt("And what is your last name?");

function defaultGreeting(name, surname) {
    if(surname === undefined || surname == null || surname.length <= 0) {
        surname = 'Doe';
    }   
    console.log("Hi " + name + " " + surname + "!");
}

defaultGreeting(firstName, lastName);
