/* 

This code was created by Yessy Eckley -- 05/07/2018

This uses a simple algorithm to calculate the amount of tax 
someone needs to pay based on brackets.

It will also calculate fixed tax deductions based on the 
rateArray without a levelArray.

Please Enjoy this simplified solution that will not have your gears spinning.

*/

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
