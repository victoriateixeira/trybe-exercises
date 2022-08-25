const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const containsA = (array) => {
  return array.reduce(
    (acc, currentString) =>
      acc +
      currentString.split('').reduce((countA, currentLetter) => {
        if (currentLetter === 'a' || currentLetter === 'A') return countA + 1;
        return countA;
      }, 0),
    0
  );
};
console.log(containsA(names));
