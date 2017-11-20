function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
};

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8
};

function formatCelsius(value) {
    return (Math.round(value) + '°C');
};
function formatFahrenheit(value) {
  return (Math.round(value) + '°F');
}
// challenge 3
 var array = [12, 23, 4];
 function hottestTemperature(Math, array) {
   return Math.max.apply(Math, array);
 }
  console.log(hottestTemperature(Math, array));
// Monday
const mondayTemperature = 100 //fahrenheit
//Test convertFahrenheitToCelsius function
let celsius = formatCelsius(convertFahrenheitToCelsius(mondayTemperature))
console.log(`On Monday it is ${celsius} `)
fahrenheit = formatFahrenheit(convertCelsiusToFahrenheit(mondayTemperature))
console.log(`The Americans would think of that as ${fahrenheit}`)

// Tuesday

const tuesdayTemperature = 31
console.log(`On Tuesday it is ${tuesdayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(tuesdayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)


// Wednesday
const wednesdayTemperature = 31
console.log(`On Wednesday it is ${wednesdayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(wednesdayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)

/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of  Done
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end Done
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/
