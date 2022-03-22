function convertMinutesToSeconds(minutes) {
  var answer = minutes * 60;
  return answer;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey,' + name;
  return greeting;
}
var greetResult = greet('Beavis');
console.log('greet:', greetResult);

function getArea(width, height) {
  var result = width * height;
  return result;
}
var getAreaResult = getArea(17, 42);
console.log('getArea:', getAreaResult);

function getFirstName(person) {
  var names = person.firstName;
  return names;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstName:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var LastArray = array[lastIndex];
  return LastArray;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement:', getLastElementResult);
