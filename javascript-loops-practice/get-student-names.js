/* exported getStudentNames */
function getStudentNames(students) {
  var student = [];
  for (var i = 0; i < students.length; i++) {
    student.push(students[i].name);
  }
  return student;
}
