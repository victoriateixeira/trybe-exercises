const wakeUp = () => 'Acordando!';

const breakkie = () => 'Bora tomar café!';
const sleep = () => 'Partiu dormir';

const doingThings = (func) => func();

console.log(doingThings(wakeUp));

//Exerceicio 1
const employeeData = (nome) => ({
  nome: nome,
  email: `${nome}@trybe.com`,
});

const newEmployees = (employeeData, nome) => {
  const employees = {
    id1: employeeData('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeData('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeData('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

//Exercício 2

const raffleGenerator = (number) => {
  const winningNumber = Math.round(Math.random() * 5);
  return checksWins(number, winningNumber);
};

const checksWins = (number, winningNumber) =>
  number === winningNumber ? `Parabéns! Você ganhou!` : 'Tente novamente';

//Exercício 3
const scoresTests = (correctAnswers, givenAnswers, comparesAnswers) => {
  return comparesAnswers(correctAnswers, givenAnswers);
};

const comparesAnswers = (correctAnswers, givenAnswers) => {
  let score = 0;
  if (correctAnswers.key !== 'N/A' || givenAnswers.answer !== 'N/A') {
    for (let key of correctAnswers) {
      for (let answer in givenAnswers) {
        correctAnswers[key] === givenAnswers[answer]
          ? (score += 1)
          : score - +0.5;
      }
    }
  }
  return score;
};
