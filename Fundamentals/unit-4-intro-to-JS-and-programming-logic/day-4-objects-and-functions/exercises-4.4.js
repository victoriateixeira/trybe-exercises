// //Exercício 1
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   console.log ('Bem vinda,', info.personagem);

//Exercício 2

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info.recorrente = "Sim";
//   console.log(info);

//Exercício 3
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };

//   for (key in info) {
//     console.log (key);
//   }

//Exercício 4
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim',
// };

//   for (key in info) {
//     console.log (info[key]);
//   }

//Exercício 5

// let infoMargarida = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim',
// };
// let infoTioPatinhas = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: "O último MAcPatinhas",
//   recorrente: 'Sim',
// };

// for ( let key in infoMargarida) {
//     if (key === "recorrente" && infoMargarida.recorrente==="Sim" && infoTioPatinhas.recorrente ==="Sim") {
// console.log ("Ambos recorrentes")
//     }
//     else {
//         console.log(infoMargarida[key],'e', infoTioPatinhas[key]);
//     }
// }

//Exercício 6
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
//   console.log ('O livro favorito de', leitor.nome,leitor.sobrenome, 'se chama',leitor.livrosFavoritos[0].titulo);

//Exercício 7
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//       {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//       },
//     ],
//   };
//   console.log (leitor);
//   console.log (leitor.nome, 'tem', leitor['livrosFavoritos'].length,'livros favoritos');

//FUNÇÕES

//Exercício 1
// function isPalindrome (word) {
//     let arrayWord = Array.from(word);
//     let arrayWordInverse = arrayWord.reverse();
//     let inverseWord = arrayWordInverse.join('');
//     if (word===inverseWord) {
//         return true;
//     }
//     else {
//         return false;
//     }

//     }

//     console.log(isPalindrome("arara"));
//     console.log (isPalindrome("abacaxi"));

//Exercício 2
// let testArray = [20, 2, 61, 75, 104, 13];
// function largestNumberIndex (array) {
//     let largestIndex=0;
//     for (let index = 0;index<array.length;index +=1) {
//         if (array[index]>array[largestIndex]) {
//             largestIndex = index;
//         }
// }
// return largestIndex;
// }
// console.log(largestNumberIndex(testArray));

 //Exercício 3
// let testArray = [2, 4, 6, 7, -10, 0, 3];
// function smallestNumberIndex (array) {
//     let smallestIndex=0;
//     for (let index = 0;index<array.length;index +=1) {
//     if (array[index]<array[smallestIndex]){
//         smallestIndex = index;
//     }
// }
// return smallestIndex;
// }
// console.log(smallestNumberIndex(testArray));

//Exercício 4
// let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// function findLargestString(array) {
//     let largestString =array[0];
//     for (let index = 0;index<array.length;index +=1) {
//     if (array[index].length>largestString.length){
//         largestString = array[index];
//     }
// }
// return largestString;
// }
// console.log(findLargestString(testArray));

//Exercício 5
// let testArray = [2, 3, 2, 5, 8, 2, 3, 6, 6, 6, 6,7,7,7,7,7,3,3,3,3,3,3];
// let count=0;
// let timesRepeated = 0;
// let mostRepeatedNumber=0;
// function findsMostRepeatedNumber (array) {
//     for (index=0;index<array.length;index+=1) {
//         for (index2=0;index2<array.length;index2+=1) {
//             if (array[index]=== array[index2]){
//                 count+=1;
            
//             if (count>timesRepeated){
//                 timesRepeated = count;
//                 mostRepeatedNumber=array[index];
//             }
//         }
        
//         }
//         count=0;
//     }
//     return mostRepeatedNumber;
// }
// console.log (findsMostRepeatedNumber(testArray));

//Exercício 6
// let sum=0;
// function sumsNumbersUntilN(number) {
//     for (n=number; n>0;n-=1) {
//         sum +=n;
//     }
//     return sum;
// }
// console.log(sumsNumbersUntilN(10));

//Exercício 7

// function verifiesStringEnding (stringWord, stringEnding) {
//     let stringEndingSize = stringEnding.length;
//     let stringWordEnding = stringWord.slice (-stringEndingSize);
//     if (stringWordEnding === stringEnding) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log (verifiesStringEnding('victoria', 'toria'));

//BONUS

// let romanNumbers = {
//     I : 1,
//     V : 5,
//     X : 10,
//     L : 50,
//     C : 100,
//     D : 500,
//     M : 1000,
// }

// function transformsNumbers (romanNumber) {
//     if 
// }

//Exercício bonus 2
// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// let evenNumbers =[];

// function findsEvenNumbers (array) {
//     for (index=0; index < array.length;index +=1) {
//         let subArray = array[index];
//         for (index2=0;index2<subArray.length;index2+=1) {
//         if (subArray[index2] %2===0) {
//             evenNumbers.push(subArray[index2]);
//         }
//     }
// }
//     return evenNumbers;
// }
// console.log (findsEvenNumbers(vector));

//Exercício bonus 3
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  function countsFruit (basket) {
    let count =0;
    let fruitObject={};
   
    for (fruit of basket){
      for (let index=0; index<basket.length; index+=1) {
        if (fruit === basket[index]){
          count+=1;
        }
        fruitObject[fruit] = count;
      }
      count=0;
    }
    let fullPrint=[];
    for (let key in fruitObject) {
let print = `${fruitObject[key]} ${key}`;
if (fruitObject[key]>1){ print+='s';}
fullPrint.push(print);
}
     let message = `Sua cesta possui: ${fullPrint.join(', ')}.`;
    
   return message;
  }
  console.log(countsFruit(basket));