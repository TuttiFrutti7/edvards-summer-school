class Fish {
  constructor(name, breed = 'fish', age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.introduce();
  }

  introduce() {
    console.log(
      `Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}!`,
    );
  }

  swim() {
    console.log('*Swims*');
  }

  fly() {
    console.log('I can fly!???');
  }
}

module.exports = Fish;

let bill = new Fish('Bill', 'goldfish', 100);
let bob = new Fish('Bob', 'salmon', 7);
bill.fly();
