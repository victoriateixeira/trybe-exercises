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
let peca = "dama";
peca = peca.toLowerCase();

switch(peca) {
    
    case "rei": console.log ("uma casa em qualquer direção");
    break 
    case "rainha": console.log ("incontáveis casas em qualquer direção");
    break
    case "torre": console.log ("linha reta");
    break
    case "bispo": console.log ("diagonal");
    break
    case "cavalo": console.log ("em L");
    break
    case "peao": console.log ("uma casa para frente");
    break
    case "peão": console.log ("uma casa para frente");
    default: console.log("Peça inválida");
}
