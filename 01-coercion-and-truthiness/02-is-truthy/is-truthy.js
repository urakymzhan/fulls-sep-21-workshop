  // YOUR CODE BELOW
  function isTruthy(arg) {
    if (arg === false || arg === null || (typeof arg === 'undefined') || arg === 0 || arg == '') {
        return false;
    } else {
        return true;
    }
}