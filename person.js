// Module wrapper function
/*
 (function (exports, require, module, __filename, __dirname) {

 })
*/
console.log(__filename)
console.log(__dirname)

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} yo`)
  }

}

module.exports = Person;
