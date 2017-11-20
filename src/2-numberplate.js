const prompt = require('prompt');

function formatVanityPlate(string) {
  let words = string.split(' ')
  words = words.map(word => word.toUpperCase())
  return words.join('')
}

numberPlates = []

const one = 'I like money'
numberPlates.push(formatVanityPlate(one))

const two = 'Cats for life'
numberPlates.push(formatVanityPlate(two.replace('for', '4')))

const three = 'Born to Ride'
numberPlates.push(formatVanityPlate(three.replace('to', '2')))


properties = [
    {
      name: 'plate',
      message: 'Enter a vanity plate name (Enter the word done when you have finished)',
      maxLength: 12,
      required: true,
      warning: 'Vanity plate name must be less than 12 characters'
    }
  ];

prompt.start()

function enterPlate() {
  prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('  You have entered: ' + result.plate)
    if (result.plate !== 'done') {
      numberPlates.push(formatVanityPlate((result.plate.replace('to', '2')).replace('for', '4')))
    }
    finishPrompt = result.plate
    if (finishPrompt === 'done') {
      console.log('Thanks')
      console.log('Here are all the registered Vanity Plates: ')
      numberPlates.forEach(function(plate) {
        console.log('- ' + plate)
      })
      console.log('Have a nice day! :)')
    } else {
      enterPlate()
    }
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
}

enterPlate()

/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/
