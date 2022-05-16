const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
console.log('Result:', doubled);

const prices = numbers.map(number => '$' + number + '.00');
console.log('Result:', prices);

const upperCased = languages.map(language => language.toUpperCase);
console.log('Result:', upperCased);

const firstLetters = languages.map(language => language[0]);
console.log('Result:', firstLetters);
