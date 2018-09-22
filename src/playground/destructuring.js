//object

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Cleveland',
//     temperature: 92
//   }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//     age: 20
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

//array destructuring

const address = ['1299 S Juniper', 'Philadelphia', 'Pennsylvania', '19147']
const [, , state = 'New York' ] = address;
console.log(`You are in ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);


