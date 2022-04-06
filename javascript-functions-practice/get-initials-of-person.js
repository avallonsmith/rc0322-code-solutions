/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var initialOfPerson = person.firstName[0] + person.lastName[0];
  return initialOfPerson;
}
