function formatVanityPlate(string) {
  //challenge 3
  string.length > 12 ? string = string.substring(0, 12) : string
  // if (string.length > 12) {
  //   return string = string.substring(0, 12)
  // }
  let words = string.split(' ')
  words = words.map(word => word.toUpperCase())
  return words.join('')
}

const one = 'I like money'
console.log(`Number plate: ${ formatVanityPlate(one) }`)
//challenge 1
const two = 'Cats for life'.replace('for', '4')
console.log(`Number plate: ${ formatVanityPlate(two)}`)
//challenge 2
const three = 'bad to the bone'.replace('to', '2')
console.log(`Number plate: ${ formatVanityPlate(three)}`)

/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/
