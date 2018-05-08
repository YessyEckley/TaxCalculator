
function FedTaxCalulator(amount, levelArray, rateArray) {
  var totalTax = 0.00;
  
  if(levelArray){
    var lenght = levelArray.length-1;
    for(x = lenght; x >= 0; x--){
      if(amount > levelArray[x]){
        var pecentage = rateArray[x];
        var amountToBeCalculated = amount - levelArray[x];
        totalTax += amountToBeCalculated * pecentage;
        //modify the amount to the range amount
        amount = levelArray[x]-1;
      }
    }
  }
  else{
    totalTax = amount * rateArray;
  }
  
  return totalTax;
}
