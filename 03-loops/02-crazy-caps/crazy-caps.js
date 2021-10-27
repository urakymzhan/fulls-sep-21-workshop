// YOUR CODE BELOW
function crazyCaps(str1) {
    let strWithCrazyCaps = '';
    if (typeof str1 !== 'string') {
        console.log(`${str1} is not a string`);
    } else {
        strWithCrazyCaps = str1.charAt(0).toLowerCase();
        for (var i = 1; i < str1.length; i++) {
            if (i % 2 == 0) {
                strWithCrazyCaps += str1.charAt(i).toLowerCase();
            } else {
                strWithCrazyCaps += str1.charAt(i).toUpperCase();
            }
        }
        return strWithCrazyCaps;
    }
}