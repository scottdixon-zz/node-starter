function sum(numbers) {
  let total = 0
  numbers.forEach(number => {
    total = total + number
  })
  return total
}

function multiply(numbers) {
  let total = 1
  numbers.forEach(number => {
    total = total * number
  })
  return total
}

console.log(`The 12 + 5 = ${sum([12, 5])}`) // => 17
console.log(`The 5 + 7 + 1 = ${sum([5, 7, 1])}`) // => 13
console.log(`The 12 x 5 = ${multiply([12,5])}`) // => 60
console.log(`The 5 x 7 x 1 = ${multiply([5,7,1])}`) // => 35


function multiplyNumbersString(numbersString) {
  const numbers = numbersString
    .split('x')
    .map(string => parseFloat(string))

  return multiply(numbers)
}

function sumNumbersString(numbersString) {
  const numbers = numbersString
    .split('+')
    .map(string => parseFloat(string))

  return sum(numbers)
}


console.log(`The 12 + 5 = ${sumNumbersString('12 + 5')}`) // => 17
console.log(`The 5 + 7 + 1 = ${sumNumbersString('5 + 7 + 1')}`) // => 13
console.log(`The 1 + 2 + 3 + 4 + 5 = ${sumNumbersString('1 + 2 + 3 + 4 + 5')}`) // => 15

console.log(`The 12 x 5 = ${multiplyNumbersString('12 x 5')}`) // => 17
console.log(`The 5 x 7 x 1 = ${multiplyNumbersString('5 x 7 x 1')}`) // => 13
console.log(`The 1 x 2 x 3 x 4 x 5 = ${multiplyNumbersString('1 x 2 x 3 x 4 x 5')}`) // => 15


/*

Challenges:
1. Add `multiple` and `multipleNumbersString` functions that multiply instead of adding, with example usage

*/
