const person = {
    name: 'Dibash',
    age: 21
};

const { name: firstName = 'Anonymous', age = 18 } = person;
console.log(`${firstName} is ${age}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

//  const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state, zip ] = address;