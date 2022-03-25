/* exported getStudentNames */
function getStudentNames(students) {
  var studentName = [];
  for (var i = 0; i < students.length; i++) {
    studentName.push(students[i]);
  }
  return studentName;
}
