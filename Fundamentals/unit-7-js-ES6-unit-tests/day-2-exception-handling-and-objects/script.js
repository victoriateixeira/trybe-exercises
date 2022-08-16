// //Exercício 1 [adicionando novas chaves]

// const addsNewEntry = (object, key, value) => {
// object[key] = value;
// return object;
// }
// let customer = {
// name: 'Victoria', 
// age : 27,
// birthPlace: 'Belo Horizonte',
// }

// console.log(addsNewEntry(customer, 'country', 'Brazil'));

// //Exercício 2 [object.keys]

// const displaysObjectEntries = (object) => {

//     for (let key in object) {
//   console.log(`${key}, Nível:${object[key]}`)
//     }
// }

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };
// console.log (displaysObjectEntries (student1));

//PARTE 2 - Exercício 1

// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         }
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         }
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       }
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   const customerInfo = (order) => {
//     return `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N˚${order.address.number}, AP: ${order.address.apartment}`;
  
//   }
  
//   console.log(customerInfo(order));
  
//   const orderModifier = (order) => {
//     // Adicione abaixo as informações necessárias.
//     const newBuyer = order.name = 'Luiz Silva';
//     const newTotal = order.payment.total = '50';
//     const pizzas = Object.keys(order.order.pizza);
//     const drinks = order.order.drinks.coke.type;
//     console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
   
//     };
    
  
//   orderModifier(order);


//PARTE 3 - Exercício 1

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   const changesLesson2Shift = (object,key,value) => {
//     object[key] = value;
//     return object;
//   };


//   const listsObjectsKeys = (object) => {
//     const objectKeys = Object.keys(object);
//     return objectKeys;
//   };

//   const findsObjectSize = (object) => {
//     const objectEntries = Object.entries(object);
//     return objectEntries.length;
//   };

//   const listsObjectsValues = (object) => {
//     const objectValues = Object.values(object);
//     return objectValues;
//   };

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);
  