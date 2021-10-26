// YOUR CODE BELOW
function taxCalculator(amount, state) {
    let njTaxRate=0.06625;
    let nyTaxRate=0.04
    if (state == 'NY') {
        return amount + (amount * nyTaxRate);
    }else if(state == 'NJ'){
        return amount + (amount * njTaxRate);
    }
}