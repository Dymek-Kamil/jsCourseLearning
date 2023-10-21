"use strict"; // Nie pozwala na robie jaksi błędów i wyświtla błędy w konsoli

// Strict mode

// let hasDrtiversLicense = false;
// const passTest = true;

// if (passTest) hasDrtiversLicense = true;
// if (hasDrtiversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// Functions

// function logger() {
//   console.log("My name is Jonas");
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function Declarations vs. Expressions

// Function Declaration

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// // Function Expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// Arrow Function

// const calcAge3 = (brithYear) => 2037 - brithYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// Reviewing Functions

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// Introduction to Arrays

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// // friends = ["Bob", "Alice"]; nie można całej tablicy zmienic w const

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// // Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// Basic Array Operations (Methods)

// const friends = ["Michael", "Steven", "Peter"];

// // Add elements
// // Na koniec
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// // Na początek
// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop(); // Ostatni element usunie
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // Pierwszy element usunie
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

// Introduction to objects

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// Dot vs Bracket notation

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas[`first${nameKey}`]);
// console.log(jonas[`last${nameKey}`]);
// console.log(jonas.`last${nameKey}`); tak nie można

// const interestedIn = prompt(
//   `What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends`
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtamn";
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and hist best friend is called Michael"
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//     return this.summary;
//   },
// };

// // console.log(jonas["calcAge"](1991));
// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.getSummary());

// Iteration for loops

// console.log("Lifting weights repatition 1");
// console.log("Lifting weights repatition 2");
// console.log("Lifting weights repatition 3");
// console.log("Lifting weights repatition 4");
// console.log("Lifting weights repatition 5");
// console.log("Lifting weights repatition 6");
// console.log("Lifting weights repatition 7");
// console.log("Lifting weights repatition 8");
// console.log("Lifting weights repatition 9");
// console.log("Lifting weights repatition 10");

// for loop działa dopóki warunek jest prawdziwy
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repatition ${rep}`);
// }

// Looping arrays, breaking and continuing

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];
// // jonas[5] does not exist

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas Array
//   console.log(jonas[i], typeof jonas[i]);

//   // Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;

//   console.log(jonas[i], typeof jonas[i]);
// }

// Looping Backwards and Loops in Lopps

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`-------- Starting exercise ${exercise} `);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
//   }
// }

// While Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repatition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   //   console.log(`While: Lifting weights repatition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You Rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }

// Assignments

// function describeCountry(country, population, capitalCity) {
//   const sentance = `${country} has ${population} milion and its capital city is ${capitalCity}`;
//   return sentance;
// }
// const poland = describeCountry("Poland", 38, "Warszawa");
// console.log(poland);
// const finland = describeCountry("Finland", 6, "Helsinki");
// console.log(finland);
// const germany = describeCountry("Germany", 86, "Berlin");
// console.log(germany);

// function precentageOfWorld1(population) {
//   const precentagePopulation = (population / 7900) * 100;
//   // return `${population} milion people is ${precentagePopulation} % of World's population`;
//   return precentagePopulation;
// }
// const chinaPopulation = precentageOfWorld1(1441);
// const polandPopulation = precentageOfWorld1(38);
// const finlandPopulation = precentageOfWorld1(6);
// console.log(chinaPopulation);
// console.log(polandPopulation);
// console.log(finlandPopulation);

// const precentageOfWorld2 = function (population) {
//   const precentagePopulation = (population / 7900) * 100;
//   return `${population} milion people is ${precentagePopulation} % of World's population`;
// };
// const chinaPopulation2 = precentageOfWorld2(1441);
// const polandPopulation2 = precentageOfWorld2(38);
// const finlandPopulation2 = precentageOfWorld2(6);

// console.log(chinaPopulation2);
// console.log(polandPopulation2);
// console.log(finlandPopulation2);

// const precentageOfWorld3 = (population) => {
//   const precentagePopulation = (population / 7900) * 100;
//   return `${population} milion people is ${precentagePopulation} % of World's population`;
// };

// const chinaPopulation3 = precentageOfWorld3(1441);
// const polandPopulation3 = precentageOfWorld3(38);
// const finlandPopulation3 = precentageOfWorld3(6);

// console.log(chinaPopulation3);
// console.log(polandPopulation3);
// console.log(finlandPopulation3);

// const describePopulation = (country, population) => {
//   const precentagePopulation = precentageOfWorld1(population);
//   return `${country} has ${population} million people, wich is about ${precentagePopulation}% of the world.`;
// };
// const chinaDescribed = describePopulation("China", 1441);
// const polandDescribed = describePopulation("Poland", 38);
// const finlandDescribed = describePopulation("Finland", 6);
// console.log(chinaDescribed);
// console.log(polandDescribed);
// console.log(finlandDescribed);

// const populations = [1441, 38, 6, 86];
// console.log(populations.length === 4);
// const precentage = [
//   precentageOfWorld1(populations[0]),
//   precentageOfWorld1(populations[1]),
//   precentageOfWorld1(populations[2]),
//   precentageOfWorld1(populations[3]),
// ];
// console.log(precentage);

// const neighbours = [
//   "Germany",
//   "Czechia",
//   "Slovakia",
//   "Ukraine",
//   "Belarus",
//   "Lithuania",
//   "Russia",
// ];

// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log(`Propably not central European country`);
// } else {
//   console.log(`Propably central European Country`);
// }

// console.log(neighbours.indexOf("Czechia"));
// neighbours[1] = "Czech Republic";
// console.log(neighbours);

// const myCountry = {
//   country: "Poland",
//   capital: "Warsaw",
//   language: "Polish",
//   population: 38,
//   neighbours: [
//     "Germany",
//     "Czechia",
//     "Slovakia",
//     "Ukraine",
//     "Belarus",
//     "Lithuania",
//     "Russia",
//   ],
//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//     return this.isIsland;
//   },
// };

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );
// myCountry.population += 2;
// console.log(myCountry.describe());
// myCountry.population -= 2;
// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());
// console.log(myCountry.isIsland);

// Loops

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is curently voting`);
// }

// const populations = [1441, 38, 6, 86];

// function precentageOfWorld1(population) {
//   const precentagePopulation = (population / 7900) * 100;
//   // return `${population} milion people is ${precentagePopulation} % of World's population`;
//   return precentagePopulation;
// }

// const populations2 = [];

// for (let i = 0; i < populations.length; i++) {
//   populations2.push(precentageOfWorld1(populations[i]));
// }
// console.log(populations2);

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

// const populations = [1441, 38, 6, 86];

// function precentageOfWorld1(population) {
//   const precentagePopulation = (population / 7900) * 100;
//   // return `${population} milion people is ${precentagePopulation} % of World's population`;
//   return precentagePopulation;
// }

// const precentage3 = [];

// let i = 0;
// while (i < populations.length) {
//   precentage3.push(precentageOfWorld1(populations[i]));
//   i++;
// }
// console.log(precentage3);

// Coding Challenge #1

// const calcAverage = (firstMatchScore, secondMatchScore, thirdMatchScore) =>
//   (firstMatchScore + secondMatchScore + thirdMatchScore) / 3;

// let scoreKoalas = calcAverage(65, 54, 49);
// let scoreDolphins = calcAverage(44, 23, 71);

// function checkWinner(avgKoalas, avgDolphins) {
//   if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else {
//     console.log(`No one wins (${avgKoalas} vs ${avgDolphins})`);
//   }
// }
// console.log(checkWinner(scoreKoalas, scoreDolphins));

// scoreKoalas = calcAverage(23, 34, 27);
// scoreDolphins = calcAverage(85, 54, 41);

// console.log(checkWinner(scoreKoalas, scoreDolphins));

// Coding Challenge #2

// function calcTip(bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(total);

// Coding Challenge #3

// const mark = {
//   fullName: "Mark Miller",
//   height: 1.69,
//   weight: 78,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   height: 1.95,
//   weight: 92,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`
//   );
// }

// Coding challenge #4

function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(total);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum = sum / arr.length;
  return sum;
}
console.log(calcAverage(total));
