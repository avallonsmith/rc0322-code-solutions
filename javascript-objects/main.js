var student = {
  firstName: 'Avallon',
  lastName: 'Smith',
  age: 21
};
console.log('value of student:', student);

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of livesInIrvine:', student.livesInIrvine);

student.previousOccupation = 'Amazon';
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Chevy',
  model: 'Impala',
  year: 1967
};
console.log('value of vehicle:', vehicle);

vehicle['color'] = 'black';
console.log('value of color:', vehicle['color']);

vehicle['isConvertible'] = false;
console.log('value of isConvertible:', vehicle['isConvertible']);

var pet = {
  name: 'Snorlax',
  type: 'Pokemon'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
