// YOUR CODE BELOW
function HowEqual(arg1, arg2) {
    if (arg1 == arg2) {
        return "loosely";
    } else if (arg1 === arg2) {
        return "strictly equal";
    } else if (arg1 !== arg2) {
        return "not equal";
    }
}