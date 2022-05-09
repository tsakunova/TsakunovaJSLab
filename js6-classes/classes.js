/* Describe base class Entity that can store name
Implement child classes Stuff, Box, User. Box can store some stuff[]. Every box belongs to user
Add example of usage of these classes, e.g., create some instances, display data related to them
Push code to repo “sweet sugar” */
class Entity {
  constructor(name) {
    this.name = name;
  }
}

class Stuff extends Entity {
  constructor(name) {
    super(name)
  }

  toString() {
    return `${this.name}`
  }
}

class Box extends Entity {
  constructor(name) {
    super(name);
    this.stuffs = [];
  }

  addStuffs(...newStuffs) {
    newStuffs.forEach(newStuff => {
      this.stuffs.push(newStuff)
    });
  }

  toString() {
    return `${this.name} box with ${this.stuffs.join(', ')}`
  }
}

class User extends Entity {
  constructor(name, box) {
    super(name);
    this.box = box;
  }
}

const stuff1 = new Stuff('apple');
const stuff2 = new Stuff('pear');
const stuff3 = new Stuff('banana');
const box = new Box('Fruits');
box.addStuffs(stuff1, stuff2, stuff3)
const user = new User('Ben', box);

console.log(
  `${user.name} has ${user.box}`
)

const stuff4 = new Stuff('corn');
const stuff5 = new Stuff('tomato');
const stuff6 = new Stuff('cucumber');
const box2 = new Box('Vegetables');
box2.addStuffs(stuff4, stuff5, stuff6)
const user2 = new User('Tom', box2);

console.log(
  `${user2.name} has ${user2.box}`
)