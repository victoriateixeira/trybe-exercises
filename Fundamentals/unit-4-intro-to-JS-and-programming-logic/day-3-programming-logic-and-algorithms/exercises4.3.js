//Exercício 1

// let number=10;
// let fatorial=number;
// for (i=number-1;i>0;i-=1) {
// fatorial=fatorial*i;
// }
// console.log (fatorial);

//Exercício 2

// let word = 'victoria';
// let wordBackwards = "";

// for (i=word.length-1;i>=0;i-=1) {
// wordBackwards+= word[i];
// }
// console.log (wordBackwards);

//Exercício 3

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for ( let n=0;n<numbers.length-1;n+=1) {
   
// for (let index = 1+n; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
// // }

// let words = ['java', 'javascript', 'python', 'html', 'css'];

// let longestWord= words[0];

// for (i=1;i<words.length;i+=1) {
//     if (words[i].length>longestWord.length) {
//         longestWord = words[i];
//     }
// }
// console.log (longestWord);


let words = ['java', 'javascript', 'python', 'html', 'css'];

let shortestWord= words[0];

for (i=1;i<words.length;i+=1) {
    if (words[i].length<shortestWord.length) {
        shortestWord = words[i];
    }
}
console.log (shortestWord);