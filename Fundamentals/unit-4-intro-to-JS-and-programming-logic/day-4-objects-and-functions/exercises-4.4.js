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
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
    ],
  };
  console.log (leitor);