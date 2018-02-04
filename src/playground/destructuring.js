// 
// Object Destructuring
// 

// const person = {
//   name: 'Andrew',
//   age: 24,
//   location: {
//     city: 'Portland',
//     temp: 57
//   }
// };

// const { name: firstName = 'Anon', age } = person;

// console.log(`${name} is ${age}`)

// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Waking Up',
//   author: 'Sam Harris',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName); 

// 
// Array Destructuring
// 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state = 'Oregon'] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00']

const [itemName, , price] = item;
console.log(`A ${itemName} costs ${price}`)