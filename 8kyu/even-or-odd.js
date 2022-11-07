/* 
##Description

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

 */

function even_or_odd(num) {
	var x = num % 2;
  if (x === 0) {
		return "Even";
	} else {
		return "Odd";
	};
}