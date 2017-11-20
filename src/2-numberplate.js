function formatVanityPlate(string) {
let wordsLength = string.split(' ')
let stringLength = wordsLength.join('')
  if(stringLength.length <= 12){
    let words = string.split(' ')
    words.forEach(function(word,index){
      if (word === 'for'){
        words[index] = '4'
      }else if (word === 'to'){
        words[index] = '2'
      }
    });
    words = words.map(word => word.toUpperCase())
    return words.join('')
  }else{
    return 'Number Plate Too Long!'
  }
}

const one = 'I like money'
console.log(`Number plate: ${ formatVanityPlate(one) }`)

const two = 'Born to dab'
console.log(`Number plate: ${ formatVanityPlate(two) }`)

const three = 'Cats for life'
console.log(`Number plate: ${ formatVanityPlate(three) }`)

const four = 'Cats for life but not dogs because they suck'
console.log(`Number plate: ${ formatVanityPlate(four) }`)


/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/
