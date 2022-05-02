const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};

const { title, author, libraryID } = book1;
const firstBook = `The title of the book is ${title}, the author is ${author}, and the library ID is ${libraryID}.`;

console.log(book1);
console.log(firstBook);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};

const { title: title2, author: author2, libraryID: libraryID2 } = book2;
const secondBook = `The title of the book is ${title2}, the author is ${author2}, and the library ID is ${libraryID2}.`;

console.log(book2);
console.log(secondBook);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

const { title: title3, author: author3, libraryID: libraryID3 } = library[0];
const { title: title4, author: author4, libraryID: libraryID4 } = library[1];
const { title: title5, author: author5, libraryID: libraryID5 } = library[2];

const thirdBook = `The title of the book is ${title3}, the author is ${author3}, and the library ID is ${libraryID3}.`;
const forthBook = `The title of the book is ${title4}, the author is ${author4}, and the library ID is ${libraryID4}.`;
const fifthBook = `The title of the book is ${title5}, the author is ${author5}, and the library ID is ${libraryID5}.`;

console.log(library);
console.log(thirdBook);
console.log(forthBook);
console.log(fifthBook);
