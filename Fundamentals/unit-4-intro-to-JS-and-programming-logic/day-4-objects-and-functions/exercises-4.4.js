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
// let testArray = [2, 3, 6, 7, 10, 10];
// function largestNumberIndex (array) {
//     let largestIndex;
//     for (let index = 0;index<array.length;index +=1) {
//         for (let index2 = 0;index2<array.length;index2 +=1) {
//             if (array[index]<array[index2]){
//                 break;
//             }
//             else {
//                largestIndex = index;
//             }
//         }
//     } 
//     return largestIndex;
// }
// console.log(largestNumberIndex(testArray));

//Exercício 3
let testArray = [2, 4, 6, 7, -10, 0, -3];
function smallestNumberIndex (array) {
    let smallestIndex;
    for (let index = 0;index<array.length;index +=1) {
        for (let index2 = 0;index2<array.length;index2 +=1) {
            if (array[index]>array[index2]){
                break;
            }
            else {
               smallestIndex = index;
            }
        }
    } 
    return smallestIndex;
}
console.log(smallestNumberIndex(testArray));
