// YOUR CODE BELOW
function myMnemonic(str1='', str2='', str3='', str4='') {
    let arr1 = [str1, str2, str3, str4];
    let filtered = arr1.filter((text) => { return text !== '' });
    let newWord = '';
    for(var i=0;i<filtered.length;i++){
        newWord+=filtered[i].charAt(0).toUpperCase();
    }
    return newWord;
}