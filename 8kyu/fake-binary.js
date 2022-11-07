/* 

##Description

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

function fakeBin(str){
    let arr = []
    str.split('').forEach(numStr=> {
      if(+numStr >=5) {
        arr.push(1)
      } else{
        arr.push(0)
      }
    })
    return arr.join('')
  } 
