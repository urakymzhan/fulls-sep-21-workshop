// YOUR CODE BELOW

function myMnemonic(...otherStrings){
    const arr1 = [...otherStrings];
    let mnemonicInner = '';
      for(var i=0; i< 4; i++){
        if(arr1[i] !== null && arr1[i] !== '' && arr1[i] !== undefined){
          const fisrtCharacter = arr1[i].charAt(0);
          mnemonicInner += fisrtCharacter;
        }
        else {
          continue;
        }
      }
    return mnemonicInner;
}

var mnemonic = myMnemonic('', 'Sam', '','Sam');
console.log(mnemonic)