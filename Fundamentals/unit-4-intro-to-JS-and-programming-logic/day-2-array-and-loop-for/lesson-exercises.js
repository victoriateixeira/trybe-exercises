// Arrays

let tarefas = [
    'Ler', 'Limpar a casa', 'Fazer exercícios da Trybe', 'Academia'
];
console.log (tarefas);
tarefas.push('Passear com o doguinho');
console.log(tarefas);
tarefas.unshift('Orar');
console.log (tarefas);
tarefas.shift();
console.log (tarefas);
tarefas.pop();
console.log(tarefas);
indexOfTask = tarefas.indexOf('Ler');
console.log(indexOfTask);

//Exercício 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercício 3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');
console.log(menu);

//FOR

//Exemplo 1
let numero = 7;
let tabuada =[];
for (index=1; index<=9;index++) {
    tabuada.push(numero*index)
}
console.log (tabuada);

//Exemplo 2
let listaDeNomes = ['Joana','Maria','Laura'];
for (let index=0;index<listaDeNomes.length;index++) {
    var mensagem = `Boas vindas ${listaDeNomes[index]}!`;
    console.log(mensagem);
};
    
