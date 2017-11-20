function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 0.5556
}

function formatCelsius(celsius){
  let roundedVal = Math.round(celsius)
  return roundedVal + '°C'
}

function formatFahrenheit(fahrenheit){
  let roundedVal = Math.round(fahrenheit)
  return roundedVal + '°F'
}

function hottestTemperature(temps){
var hottestTemp = 0;
  for (var i = 0; i < temps.length; i++) {
    if (hottestTemp < temps[i]){
      hottestTemp = temps[i];
    }
  }
return hottestTemp
}

temps = [24,26,23,30];
console.log(`${hottestTemperature(temps)}°C is the hottest temperature`)

let fahrenheit
let celsius

// Monday

const mondayCelciusTemperature = 24
const mondayFarenheitTemperature = 75

celsius = formatCelsius(convertFahrenheitToCelsius(mondayFarenheitTemperature))
console.log(`On Monday it is ${celsius}`)
fahrenheit = formatFahrenheit(convertCelsiusToFahrenheit(mondayCelciusTemperature))
console.log(`The Americans would think of that as ${fahrenheit}`)

// Tuesday

const tuesdayTemperature = 31
console.log(`On Tuesday it is ${tuesdayTemperature}°C`)
fahrenheit = formatFahrenheit(convertCelsiusToFahrenheit(tuesdayTemperature))
console.log(`The Americans would think of that as ${fahrenheit}`)

/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/
