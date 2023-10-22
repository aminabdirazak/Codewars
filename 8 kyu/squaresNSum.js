/**
 * Description:
 * 
 * Complete the square sum function so that it squares each number passed into it and then sums the results together.
 * 
 * For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 3^2 = 9
 */

/**
 * Many ways to solve this
 * 1.
 *   number * number
     Math.pow(number, 2)
     number **2

   2.  - loop
   function squareSum(numbers) {
    let sum = 0
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
}
  3. Reducer

  function squareSum(numbers) {
    const multiply = number => number * number
    const reducer = (acc, cur) => acc + cur
    return Array.from(numbers, multiply).reduce(reducer, 0)
}
 4. 
 function squareSum(numbers) {
    return numbers.map(multiply).reduce(reducer, 0)
}
function multiply(number) {
    return Math.pow(number, 2)
}
function reducer(acc, cur) {
    return acc + cur
}

5. 
function squareSum(numbers) {
    return numbers.reduce( (acc, cur) => acc + (cur **2), 0)
}

6. forEach
function squareSum(numbers) {
    let sum = 0
    numbers.forEach( number => {
        sum += (number * number)
    })
    return sum
}
 */

function squareSum(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i] **2
  }
  return sum
}

squareSum([1,2, 2])