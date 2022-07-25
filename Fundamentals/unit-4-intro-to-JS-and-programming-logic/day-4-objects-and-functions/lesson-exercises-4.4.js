// let diasDaSemana = {
//    1 : 'domingo',
//    2 : 'segunda',
//    3 : 'terça',
//    4 : 'quarta',
//    5 : 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//     };
    
//     console.log(diasDaSemana['1']); // domingo

//Exercicio 1
let player = {
    name: 'Marta',
    lastName:'Silva',
    age: 34,
    medals: {
        golden:2,
        silver:3,
    },
    bestInTheWorld: 
            [2006, 2007, 2008, 2009, 2010, 2018],
}
console.log('A jogadora',player.name,player.lastName,'tem',player.age, 'anos de idade');
console.log ('A jogadora',player.name,player.lastName,'foi eleita a melhor do mundo por',player["bestInTheWorld"].length,'vezes.');