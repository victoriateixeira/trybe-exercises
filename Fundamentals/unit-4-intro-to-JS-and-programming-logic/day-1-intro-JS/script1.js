// // Programa 1

// let a = 10;
// let b = 2;

// // Adição
// let soma = a+b;
// console.log (soma);

// // Subtração
// let subtracao = a-b;
// console.log (subtracao);

// // Multiplicação
// let multiplicacao = a*b;
// console.log (multiplicacao);

// //Divisão
// let divisao = a/b;
// console.log (divisao);

// //Módulo
// let restoDivisao = a%b;
// console.log (restoDivisao);

// Programa 2
// let c = 10;
// let d = 15;
// let compare = c>d;
// if(compare) {
//     console.log (c);

// }
// else {
//     console.log (d);
// }

// Programa 3
// let e = 27;
// let f = 27;
// let g = 8;
// if (e>f && e>g)
// {
//     console.log(e);
// }
// else if (f>e && f>g) {
//     console.log (f);
// }
// else if (g>e && g>f) {
//     console.log (g)
// }
// else {
//     console.log("Há um ou mais números iguais")
// }

//Programa 4
// const h = 0;
// if(h>0) {
//     console.log ("Positivo");
// }
// else if (h<0) {
//     console.log ("Negativo");
// }
// else { console.log ("Zero")}

//Programa 5
// let i = -30;
// let j = 110;
// let k = 100;
// let isTriangle = i+j+k===180;

// if (i<0 || j<0 || k<0)
// { console.log("ângulo inválido")}
// else {console.log(isTriangle)}

// Programa 6
// let peca = "dama";
// peca = peca.toLowerCase();

// switch(peca) {
    
//     case "rei": console.log ("uma casa em qualquer direção");
//     break 
//     case "rainha": console.log ("incontáveis casas em qualquer direção");
//     break
//     case "torre": console.log ("linha reta");
//     break
//     case "bispo": console.log ("diagonal");
//     break
//     case "cavalo": console.log ("em L");
//     break
//     case "peao": console.log ("uma casa para frente");
//     break
//     case "peão": console.log ("uma casa para frente");
//     default: console.log("Peça inválida");
// }

// Programa 7

// let  percentScore = 110;


//     if (percentScore>=90 && percentScore<=100){
//          console.log("A");
//     }
//     else if (percentScore>=80 && percentScore<90) {
//         console.log("B");
//     }
//     else if (percentScore>=70 && percentScore<80) {
//         console.log("C");
//     }
//     else if  (percentScore>=60 && percentScore<70) {
//         console.log("D");
//     }
//     else if (percentScore>=50 && percentScore<60) {
//         console.log("E");
//     }
//     else if (percentScore>=0 && percentScore<50) {
//         console.log("F");
//     }
//     else {
//         console.log ("Nota inválida");

//     }
  
// Programa 8
// const l = 11;
// const m = 8;
// const n = 69;

// isEven = l%2===0 || m%2===0 || n%2===0;
// console.log(isEven);

// //ou 
// const l = 11;
// const m = 8;
// const n = 69;

// if (l%2===0 || m%2===0 || n%2===0) {
//     console.log("true")
// }
// else { 
//     console.log ("false")
// }

//Projeto 9
// const o = 12;
// const p = 7;
// const q = 63;

// isOdd = o%2!==0 || p%2!==0 || q%2!==0;
// console.log(isOdd);

// //ou 
// const o = 12;
// const p = 8;
// const q = 60;

// if (o%2!==0 || p%2!==0 || q%2!==0) {
//     console.log("true")
// }
// else { 
//     console.log ("false")
// }

//Projeto 10

let buy = 30;
let sell = 60;
let buyGross = buy+0.2*buy
let profit = sell - buyGross
console.log (profit);

