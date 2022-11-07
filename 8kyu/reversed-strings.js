/* 
##Description

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

 */

function solution(str){
	const word = str.split('')
	
	const reversedWord = word.reverse()
	
	const jointWord = reversedWord.join('')
	
	return jointWord
  }