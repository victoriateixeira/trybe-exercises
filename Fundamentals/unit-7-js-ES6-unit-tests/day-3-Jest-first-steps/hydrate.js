function hydrate(drinkString) {
    let replaced = drinkString.replace(/\D/g,'');
    let drinkArray = replaced.split('');
    let sumOfDrinks = 0;
    for (let index = 0; index < drinkArray.length; index += 1) {
      sumOfDrinks += Number(drinkArray[index]);
    }
    if (sumOfDrinks > 1) {
      return `${sumOfDrinks} copos de água`;
    }
    return `${sumOfDrinks} copo de água`;
  };

  module.exports = hydrate;