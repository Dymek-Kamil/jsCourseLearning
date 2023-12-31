'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// const jay = 'Jay';

// console.log(jonas instanceof Person);

// Person.hey = function () {
//   console.log('Hey there 👋🏿');
// };

// Person.hey();

// console.log(jay instanceof Person);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinekdObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 2, 3, 1];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

// class expression

// const PersonCl = {}

// class declaration
// Instance methods

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log(`Hey there`);
//     // console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey();

// const account = {
//   owner: 'jonas',
//   movements: [200, 520, 233, 420],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log(`Hey there`);
//     // console.log(this);
//   }
// }
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a studen I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = coruse;
// };

// StudentProto.intorduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.coruse}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay,', 2010, 'Computer Science');
// jay.intorduce();
// jay.calcAge();

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods

// class Account {
//   // 1. Public fields (instances not prototype)
//   locale = navigator.language;

//   // 2. Private fields (instances not prototype)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // Protected property
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3. Public methods

//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   // 4. Private methods
//   #approveLoan(val) {
//     return true;
//   }
//   static helper() {
//     console.log(`Helper`);
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// // acc1.#approveLoan(1000);
// console.log(acc1.getMovements());
// Account.helper();

// // console.log(acc1.#movements);

// // Chaining

// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

// // Coding challenge 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const bmw = new Car('BMW', 120);
// console.log(bmw);
// bmw.accelerate();
// bmw.brake();

// const mercedes = new Car('Mercedes', 95);
// console.log(mercedes);
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();

// //  Coding Challenge 2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelarate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     return (this.speed = speed * 1.6);
//   }
// }

// const ford = new Car('Ford', 120);

// console.log(ford.accelarate());
// console.log(ford.accelarate());
// console.log(ford.brake());
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);

// // Coding Challenge #3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const EV = function (make, speed, battery) {
//   Car.call(this, make, speed);
//   this.battery = battery;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   return (this.battery = chargeTo);
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.battery -= 1;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.battery}%`
//   );
// };

// const tesla = new EV('Tesla', 140, 23);
// console.log(tesla.accelerate());
// tesla.chargeBattery(90);
// console.log(tesla);

// Coding challenge 4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelarate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}
class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelarate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} with a charge of ${this.#charge}%`
    );
    return this;
  }
  chargeBattery(chargeTo) {
    return (this.#charge = chargeTo), this;
  }
}
const car1 = new EVCL('Rivian', 120, 23);

console.log(car1);
car1
  .accelarate()
  .brake()
  .accelarate()
  .accelarate()
  .brake()
  .chargeBattery(50)
  .accelarate();
