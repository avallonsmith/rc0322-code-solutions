const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = parseFloat(process.argv[2]);
const opperation = process.argv[3];
const y = parseFloat(process.argv[4]);

if (opperation === 'plus') {
  console.log('result:', add(x, y));
} else if (opperation === 'subtract') {
  console.log('result:', subtract(x, y));
} else if (opperation === 'multiply') {
  console.log('result', multiply(x, y));
} else if (opperation === 'divide') {
  console.log('result:', divide(x, y));
} else {
  console.log('Error');
}
