const mocker = require('mocker-data-generator').default;
const { faker } = require('@faker-js/faker');

let userSchema = {
    firstName: {
        faker: 'person.fullName()'
    },
    lastName: {
        faker: 'person.lastName()'
    },
    username: {
        function: () => {
            return faker.person.lastName().substring(0, 5) + Math.floor(Math.random() * 10);
        }
    },
    email: {
        function: () => {
            return String(faker.internet.email()).toLowerCase();
        }
    },
    country: {
        faker: 'location.country()'
    },
    createdAt: {
        faker: 'date.past()'
    },
};

mocker()
.addGenerator('faker', faker)
.schema('users', userSchema, 15).build().then(data => {
    console.log(data);
});
