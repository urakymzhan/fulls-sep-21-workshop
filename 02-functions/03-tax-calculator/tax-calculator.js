// YOUR CODE BELOW

const states = {
  'NY': 0.04,
  'NJ': 0.0625,
  'IL': 0.09,
  'CA': 0.10,
  'TX': 0.08,
}

function taxCalculator(price, state) {
  var afterTaxesTotal;
  if(states.hasOwnProperty(state)) {
    for(let key in states) {
        if(key === state) {
          afterTaxesTotal = price + (price*states[key])
        } 
      }
  } else {
    return 'Incorrect State';
  }
  return afterTaxesTotal;    
 }

 var taxes = taxCalculator(10, 'T');
 console.log(taxes); 