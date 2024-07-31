const Person = require('oop/Person.js');

let edvards = new Person('Edvards', 'Kalve', 20, 'Jobless', true);
edvards.introduce();
edvards.wakeUp();
console.log(edvards.isSleeping);
