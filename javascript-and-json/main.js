var books = [
  {
    isbn: '9780606340182',
    title: 'Flowers For Algernon',
    author: 'Daniel Keyes'
  },
  {
    isbn: '9780007103072',
    title: 'Supermega Saves The Troops',
    author: 'Ryan Magee and Matt Watson'
  },
  {
    isbn: '9781387159505',
    title: 'Francis of the Filth',
    author: 'George Miller'
  }
];
console.log('books:', books);
console.log('typeof books:', typeof books);

var jsonBooks = JSON.stringify(books);
console.log('jsonbooks:', jsonBooks);
console.log('typeof jsonbooks:', typeof jsonBooks);

var jsonStudent = '{"id": 1117001744, "name": "Avallon Smith"}';
console.log('jsonStudent', jsonStudent);
console.log('typeof jsonStudent:', typeof jsonStudent);

var student = JSON.parse(jsonStudent);
console.log('student:', student);
console.log('typeof student:', typeof student);
