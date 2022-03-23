var firstNumber = 1;
var secondNumber = 2;
var thirdNumber = 3;
var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Wolverine', 'Hulk', 'Batman'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIdex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'Flowers For Algernon',
    author: 'Daniel Keyes'
  },
  {
    title: 'The Divine Comedy',
    author: 'Dante Alighieri'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Avallon Smith';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say My Name:', sayMyName);
