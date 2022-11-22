'use strict';
console.log('function Constsructor');
/** 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   this.prinAge = function () {
  //     console.log(2022 - birthYear);
  //   };
};

const nar = new Person('Nar', 1990);
const mir = new Person('Mir', 1990);
const btc = new Person('BTC', 2009);
const ETH = new Person('ETH', 2014);

console.log(nar);
console.log(mir);
console.log(btc);
console.log(ETH);
console.log(nar instanceof Person);

// Prototype
console.log(Person.prototype);
Person.prototype.printAge = function () {
  console.log(2022 - this.birthYear);
};
nar.printAge();
btc.printAge();
ETH.printAge();
console.log(nar.__proto__);
// 1. Создается новый пустой объект
// 2. Вызывается функция, this = {}
// 3. {} связывается с прототипом
// 4. Функция автоматически возвращает {}

// Прототипное наследование для встроенных Объектов
console.log(nar.hasOwnProperty('birthYear'));

// Person.prototype
console.log(nar.__proto__);

// Object.prototype - верхушка цепи прототипов
console.log(nar.__proto__.__proto__);

// null
console.log(nar.__proto__.__proto__.__proto__);

const numbers = [1, 2, 3, 4, 2, 4, 8];
console.log(numbers.__proto__);
console.log(numbers.__proto__ === Array.prototype);
console.log(numbers.__proto__.__proto__);

Array.prototype.uniqueElements = function () {
  return [...new Set(this)];
};
console.log(numbers.uniqueElements());

const h2 = document.querySelector('h2');
console.dir(h2);
console.dir(n => n * 2);

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 5;
  console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
};

const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);

honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
bmw.break();
bmw.break();
bmw.break();
bmw.break();

// Классы ES6

// Class Expression
// const Person = class {

// }

// Class Declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //   Методы добавляются в свойство .prototype
  printAge() {
    console.log(2022 - this.birthYear);
  }
}
const jack = new Person('Jack', 2000);
console.log(jack);
jack.printAge();
console.log(jack.__proto__ === Person.prototype);

Person.prototype.greet = function () {
  console.log(`Hello ${this.firstName}!`);
};
jack.greet();

// 1. Классы не "поднимаются" при помощи hoisting
// 2. 

// Setters & Getters
const account = {
  owner: 'nar',
  transactions: [300, 500, -100, 600],

  lastTransaction() {
    return this.transactions.slice(-1).pop();
  },
};
console.log(account.lastTransaction());
*/
const account = {
  owner: 'nar',
  transactions: [300, 500, -100, 600],

  get lastTransaction() {
    return this.transactions.slice(-1).pop();
  },
  set lastTransaction(trans) {
    this.transactions.push(trans);
  },
};
console.log(account.lastTransaction);
account.lastTransaction = 1;
console.log(account.transactions);
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //   Методы добавляются в свойство .prototype
  printAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hello ${this.fullName}!`);
  }
  get age() {
    return 2022 - this.birthYear;
  }
  //   Установить значение в уже существующее свойство
  set fullName(personName) {
    console.log(personName);
    if (personName.includes(' ')) {
      this._fullName = personName;
    } else {
      alert(`Полное имя должно состоять из фамилии и имени!`);
    }
  }
  get fullName() {
    return this._fullName;
  }
}
const jack = new Person('Jack White', 2000);
console.log(jack);
const jane = new Person('Jane', 2002);
console.log(jane);
