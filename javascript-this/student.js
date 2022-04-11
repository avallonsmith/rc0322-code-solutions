/* exported student */
var student = {
  firstName: 'Avallon',
  lastName: 'Smith',
  subject: 'English',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};

student.getFullName();
student.getIntroduction();
