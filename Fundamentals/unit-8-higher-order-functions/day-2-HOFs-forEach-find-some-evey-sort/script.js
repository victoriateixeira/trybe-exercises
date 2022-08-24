// // //Exercício de fixação 1
// // const emailListInData = [
// //   'roberta@email.com',
// //   'paulo@email.com',
// //   'anaroberta@email.com',
// //   'fabiano@email.com',
// // ];

// // const showEmailList = (email) => {
// //   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// // };

// // emailListInData.forEach(showEmailList);

// // //Exercício de fixação 2
// // const numbers = [19, 21, 30, 3, 45, 22, 15];

// // const findDivisibleBy3And5 = () => {
// //   return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
// // };
// // console.log(findDivisibleBy3And5());

// // //Exercício de fixação 3
// // const names = ['João', 'Irene', 'Fernando', 'Maria'];

// // const findNameWithFiveLetters = () => {
// //   return names.find((name) => name.length === 5);
// // };

// // console.log(findNameWithFiveLetters());

// // //Exercício de fixação 4
// // const musicas = [
// //   { id: '31031685', title: 'Partita in C moll BWV 997' },
// //   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
// //   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// // ];

// // function findMusic(id) {
// //   return musicas.find((musica) => musica.id === id);
// // }

// // console.log(findMusic('31031685'));

// //Exercício de fixação 5
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((nome) => nome === name);
// };

// console.log(hasName(names, 'Victoria'));

// //Exercício de fixação 6
// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every((person) => person.age >= minimumAge);
// };

// console.log(verifyAges(people, 16));

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
//Exercício 1

const firstAuthorBorn1947 = books.find(
  (element) => element.author.birthYear === 1947
).author.name;
console.log(firstAuthorBorn1947);

//Exercício 2

const findsShortestName = () => {
  let shortestName;
  books.forEach((element) => {
    if (!shortestName || element.name.length < shortestName.length) {
      shortestName = element.name;
    }
  });
  return shortestName;
};
console.log(findsShortestName());

//Exercício 3

const getNamedBook = () => books.find((book) => book.name.length === 26).name;
console.log(getNamedBook());

//Exercício 4
function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => b.releaseYear - a.releaseYear);
}
booksOrderedByReleaseYearDesc();
console.log(books);

//Exercício 5
const everyoneWasBornOnSecXX = books.every(
  (book) => 1899 < book.author.birthYear && book.author.birthYear < 2000
);
console.log(everyoneWasBornOnSecXX);

//Exercício 6
const someBookWasReleaseOnThe80s = books.some(
  (book) => book.releaseYear > 1979 && book.releaseYear < 1990
);
console.log(someBookWasReleaseOnThe80s);

//Exercício 7
// const authorUnique = books.forEach((book1) => {
//   return !books.forEach(
//     (book2) =>
//       book1.author.birthYear === book2.author.birthYear &&
//       book1.author.name !== book2.author.name
//   );
// });

function authorUnique() {
  return books.every(
    (book) =>
      !books.some(
        (bookSome) =>
          bookSome.author.birthYear === book.author.birthYear &&
          bookSome.author.name !== book.author.name
      )
  );
}
console.log(authorUnique());
