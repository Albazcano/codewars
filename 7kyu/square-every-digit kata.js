/* -- Description --

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
slack
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num){
  
    const string = String(num)
    
    result = ''
    
    for (index = 0; index < string.length; index++){
      result += string[index]** 2
    }
    
    return Number(result);
  }