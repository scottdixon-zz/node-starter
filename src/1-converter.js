function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8
}

function formatCelsius(temp) {
  return `${Math.round(temp)}°C`
}

let fahrenheit

let celsius

let temps = []

// Monday

const mondayTemperature = 24
console.log(`On Monday it is ${mondayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(mondayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)
temps.push(mondayTemperature)

// Tuesday

const tuesdayTemperature = 31
console.log(`On Tuesday it is ${tuesdayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(tuesdayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)
temps.push(tuesdayTemperature)

// Wednesday

const wednesdayTemperature = 109
console.log(`On Wednesday it is ${wednesdayTemperature}°F`)
celsius = convertFahrenheitToCelsius(wednesdayTemperature)
console.log(`The Europeans would think of that as ${formatCelsius(celsius)}`)
temps.push(Math.round(celsius))

// Weekly high
const hottestTemperature = (temps) => {
  return Math.max(...temps)
}

console.log(`The hottest temperature this week is ${hottestTemperature(temps)}°C`)

/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/
