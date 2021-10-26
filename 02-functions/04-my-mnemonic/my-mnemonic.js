// YOUR CODE BELOW

function myMnemonic(...otherStrings){
   let mnemonicInner = '';
     for(var i=0; i< 4; i++){
       if(otherStrings[i] !== null && otherStrings[i] !== '' && otherStrings[i] !== undefined){
         const fisrtCharacter = otherStrings[i][0].toUpperCase();
         mnemonicInner += fisrtCharacter;
       }
     }
   return mnemonicInner;
}

var mnemonic = myMnemonic('', 'alex', '','sam');
console.log(mnemonic)