// Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index=0; index<numbers.length ; index += 1) {
    console.log(numbers[index]);
}
console.log (numbers.length);

//Exercício 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum =0;
for (let index=0; index<numbers.length ; index += 1) {
    sum +=numbers[index]
}
console.log(sum);

//Exercício 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum =0;
for (let index=0; index<numbers.length ; index += 1) {
    sum +=numbers[index];
}
    let avg = sum/numbers.length;
    console.log(avg);

