/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var descriptionOfPerson = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return descriptionOfPerson;
}
