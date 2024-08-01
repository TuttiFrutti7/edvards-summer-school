class Person {
  constructor(name, surname, age, job) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.job = job;
    this.isSleeping = true;
  }

  sleeping() {
    return (this.isSleeping = true);
  }

  wakeUp() {
    return (this.isSleeping = false);
  }

  calcAge() {
    return 2024 - this.age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

module.exports = Person;

let edvards = new Person('Edvards', 'Kalve', 20, 'Jobless', true);
edvards.introduce();
edvards.wakeUp();
console.log(edvards.isSleeping);
