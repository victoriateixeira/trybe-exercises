const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//Porque ela tem a classe "tech"
// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let listItems = document.querySelectorAll('li');


 listItems[0].addEventListener('click',addsTechClass);
 listItems[1].addEventListener('click',addsTechClass);
 listItems[2].addEventListener('click',addsTechClass);

function addsTechClass (listItem) {
    let activeElement = document.querySelector('.tech');
       activeElement.classList.remove('tech');
 listItem.target.classList.add('tech');
 }


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
textBox = document.getElementById('input');
textBox.addEventListener('keyup', altersTechText);

function altersTechText() {
    let activeElement = document.querySelector('.tech');
activeElement.innerHTML = `${textBox.value}`;
}




// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
let myTop3 = document.getElementById('my-spotrybefy');
myTop3.addEventListener('dblclick', redirectToPortfolio);

function redirectToPortfolio() {

    window.location.href = "https://www.betrybe.com/";
}


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myTop3.addEventListener('mouseover',altersColourYellow);
myTop3.addEventListener('mouseout',altersColourWhite);
function altersColourYellow() {
    myTop3.style.color = 'yellow';
}

function altersColourWhite() {
    myTop3.style.color = 'white';
}
// function altersColourWhite() {
//     myTop3.style.color = 'white';
// }

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.