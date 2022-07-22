// // Exercício 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index=0; index<numbers.length ; index += 1) {
//     console.log(numbers[index]);
// }
// console.log (numbers.length);

// //Exercício 2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let sum =0;
// for (let index=0; index<numbers.length ; index += 1) {
//     sum +=numbers[index]
// }
// console.log(sum);

// //Exercício 3
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum =0;
// for (let index=0; index<numbers.length ; index += 1) {
//     sum +=numbers[index];
// }
//     let avg = sum/numbers.length;
//     console.log(avg);

// //Exercício 4
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum =0;
// for (let index=0; index<numbers.length ; index += 1) {
//     sum +=numbers[index];
// }
//     let avg = sum/numbers.length;
//     if (avg>20) {
//         console.log('valor maior que 20');
//     }
//     else {
//         console.log('valor menor ou igual a 20');
//     }

//Exercício 5
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let higherNumber = numbers[0];

// for (let index=1; index<numbers.length;index+=1) {

// if (numbers[index]>higherNumber) {
//     higherNumber = numbers[index];
// }
// }
// console.log(higherNumber);

//Exercício 6
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let oddNumbersCount=0;

// for(index=0; index<numbers.length;index+=1) {
//     if (numbers[index]%2 !== 0){
//         oddNumbersCount+=1;
//     }
// }
// if (oddNumbersCount === 0) {
//     console.log ("nenhum valor ímpar encontrado")
    
// }
//     else {
//         console.log(oddNumbersCount);
//     }


//Exercício 7
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let lowerNumber = numbers[0];

// for (let index=1; index<numbers.length;index+=1) {

// if (numbers[index]<lowerNumber) {
//     lowerNumber = numbers[index];
// }
// }
// console.log(lowerNumber);


//Exercício 8
// let array = [];
// for (index=1; index<=25;index+=1) {
//     array.push(index);
// }
// console.log(array);

// Exercício 9

// let array = [];
// for (index=1; index<=25;index+=1) {
//     array.push(index);
// }
// console.log(array);

// let arrayHalf = [];
// for(index=0;index<array.length;index+=1) {
//     arrayHalf.push(array[index]/2);
// }
// console.log(arrayHalf);

//BONUS

//Exercício bonus 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for ( let n=0;n<numbers.length-1;n+=1) {
//     let sizeOfNumbers = numbers.length-n
// for (let index = 1; index < sizeOfNumbers; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
// }
// console.log (numbers);

//Exercício bonus 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for ( let n=0;n<numbers.length-1;n+=1) {
   
for (let index = 1+n; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
}
console.log (numbers);
