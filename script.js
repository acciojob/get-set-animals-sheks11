//complete this code
class Animal {
  constructor(species) {
    this.species = species;
  }

  makeSound() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  constructor(name) {
    super("Dog");
    this.name = name;
  }

  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  constructor(name) {
    super("Cat");
    this.name = name;
  }

  makeSound() {
    console.log("Meow!");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
