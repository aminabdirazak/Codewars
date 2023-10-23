/**
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
 */

/*Parameter: takes a input, the number will always be positive and greater than 0 */
/* mind stopped working for the other 3(Return, Example, and Pseudocode) lol*/


var summation = function (num) {
    let sum = 0
   for (let i = 0; i <= num; i++){
    sum += i
   }
   console.log(sum)
  }
 
summation([2])