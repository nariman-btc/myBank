'use strict';
console.log('function Constsructor');

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
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

// 1. Создается новый пустой объект
// 2. Вызывается функция, this = {}
// 3. {} связывается с прототипом
// 4. Функция автоматически возвращает {}
