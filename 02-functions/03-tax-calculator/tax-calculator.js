// YOUR CODE BELOW

function taxCalculator(price, state){
    var afterTaxesTotal;
    if(price !== 0 || price !== null || price !== ''){
     if(state === 'NY'){
         afterTaxesTotal= price + (price*0.04);
     }
     else if(state === 'NJ'){
         afterTaxesTotal= price + (price*0.0625);
     }
     else if(state === 'IL'){
         afterTaxesTotal= price + (price*0.09);
     }
     else {
       console.log('Please submit proper state name: ');
     }
    }else{
      console.loconsole.log('Please submit proper price: ');
    }
     return afterTaxesTotal;
 }
 
 var taxes = taxCalculator(  0 ,'I' );
 console.log(taxes);