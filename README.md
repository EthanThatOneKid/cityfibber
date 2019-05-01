# cityfibber
tiny npm package that pads the name of a city with additional fib

# ascii-game
![GitHub forks](https://img.shields.io/github/forks/EthanThatOneKid/cityfibber.svg?style=social&label=Fork)
![GitHub stars](https://img.shields.io/github/forks/EthanThatOneKid/cityfibber.svg?style=social&label=Star)
![bundle size](https://img.shields.io/bundlephobia/min/cityfibber.svg)
![npm downloads](https://img.shields.io/npm/dt/cityfibber.svg)

## Installation
`npm i cityfibber`

## Usage
```javascript
// Dependencies
const cityfibber = require('cityfibber');

// Applying fib on one city name...
const gimmeFib = cityfibber("New York");
console.log(gimmeFib);
// 'New Yorkwar'

// Applying fib on a list of city names...
const tests = ["New York", "Garden Grove", "Long Beach", "Huntington Beach"];
const gimmeFibs = tests.map(cityfibber);
console.log(gimmeFibs);
// [ 'New Yorkwar',
//   'Garden Groveick',
//   'Fullertonlas',
//   'Huntington Beachmer' ]

```

---

Engineered with ♥ by [@EthanThatOneKid](https://github.com/EthanThatOneKid)
