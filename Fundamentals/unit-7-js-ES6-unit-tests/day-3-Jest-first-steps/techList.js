function techList(list, person) {
    let orderedArray = list.sort();
    let listArray = [];
    let object = {};
    if (list.length === 0) {
      listArray = 'Vazio!';
      return listArray;
    }
  
    for (let index = 0; index < orderedArray.length; index += 1) {
      object.tech = orderedArray[index];
      object.name = person;
      listArray[index] = object;
      object = {};
    }
    return listArray;
  }
  module.exports = techList;