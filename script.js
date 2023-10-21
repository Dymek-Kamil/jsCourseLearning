// Linking a JS File
// let js = "amaizing";
// if (js === "amaizing") alert("JavaScript is FUN!");
// console.log(40 + 8 + 23 - 10);

// Values and Variables
// console.log("Jonas");
// console.log(23);

// // Pierwsze słowo zmiennej pisać małą literą następne z dużej
// let firstName = "Matilda";
// // let first = "jonas";
// // let firstNamePerson;
// // Lub tak też piszą
// // let first_name_person;

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// // Nie zaczynać od cyfry zmiennej
// // let 3years = 3
// // Tak też nie pisać
// // let jonas&matilda = "JM"
// // Tak git
// // let jonas_matilda
// // Nie można keywordów function itp ale z $ lub _ można
// // let _function = 27
// // Niezaczynać zmiennej od dużej litery bo to tylko do stałych zmiennych
// let PI = 3.1415;

// // Lepiej pisać czysto i zrozumialie
// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// // Nie tak
// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// Data Types
// Number to jest liczba dziesiętna nawet jak nie widać nic po przecinku
// String to ciągi znaków zawsze muszą byc w apostrofie lub cudzysłowie
// Boolean logiczny typ danych TRUE or FALSE
// Undefined bierze wartość która nie jest przypisane
// NULL pusta wartość
// Symbol wartość która jest unique i nie może zostać zmieniona
// BIGINT większe liczb niż number może mieć

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// // let,const and var
// // let można zmieniać wartość
// // const nie można zmieniać wartości
// // var nie używać
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// // const job;

// var job = "programmer";
// job = "teacher";

// lastName = "Schmedtmann";
// console.log(lastName);

// Basic Operators

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// // 2**3 2 do potęgi 3 = 2*2*2
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assigment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparision operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// Operator Precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const avarageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, avarageAge);

// Strings and Template Literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = "1991";
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String
// multiple
// lines`);

// If statements

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
// }
// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// Type conversion and Coercion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Type coercion
// console.log("I am " + 23 + " years old");
// console.log("I am " + String(23) + " years old");
// console.log("23" + "10" + 3);
// console.log("23" / "2");

// Falsy values

// 5 falsy values: 0, "", undefiend, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is undefined");
// }

// Equality operators

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");

// if (age == 18) console.log("You just became an adult :D (loose)");

// const favourite = Number(prompt("What's your favoutite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// Switch statement

// const day = "wednesday";

// switch (day) {
//   case "monday": // day === "monday"
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }
// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a valid day");
// }

// Statements and Expresions

// // Expresions to coś co daje jakies value
// 3 + 4;
// 1991;
// true && false && !false;

// // Statement to cos co nie daje value ale składa sie z expresions
// if (23 > 10) {
//   const str = "23 is bigger"; // "23 is bigger" to expresion ale cała linijka to statement
// }
// const me = "Jonas";
// console.log(`I'm ${2037 - 1991} years old ${me}`);

// The conditional (Ternary) operator

// const age = 23;
// // age >= 18
// //   ? console.log("I like to drink wine 🍷")
// //   : console.log("I like to drink water 🧊");

// const drink = age >= 18 ? "wine 🍷" : "water 🧊";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 🧊";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 🧊"}`);

// Assigments

// const country = "Poland";
// const continent = "Europe";
// let populationPoland = 38;
// let halfPopulationPoland = populationPoland / 2;
// let populationFinland = 6;
// const comparingPopulation = populationPoland > populationFinland;
// const avaragePopulation = 33;
// const isPopulationBelowAverage = populationPoland < avaragePopulation;
// const isIsland = false;
// const language = "Polish";
// const description = `${country} is in ${continent}, and its ${populationPoland} milion people speak ${language}`;
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// console.log(country);
// console.log(continent);
// console.log(populationPoland, halfPopulationPoland);
// console.log(isIsland);
// console.log(language);
// console.log(description);
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof populationPoland);
// console.log(typeof isIsland);
// console.log(typeof language);

// if (populationPoland > avaragePopulation) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s populations is ${
//       avaragePopulation - populationPoland
//     } million below average`
//   );
// }
// if (numNeighbours === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// Coding Challenge #1 , #2

// let heightMark = 1.69;
// let heightJohn = 1.95;
// let massMark = 78;
// let massJohn = 92;

// const BMIJohn1 = massJohn / heightJohn ** 2;
// const BMIMark1 = massMark / heightMark ** 2;

// if (BMIJohn1 > BMIMark1) {
//   console.log(`John's BMI (${BMIJohn1}) is higher than Mark's (${BMIMark1})`);
// } else {
//   console.log(
//     `Mark's BMI (${BMIMark1}) is higher than John's BMI (${BMIJohn1})`
//   );
// }

// heightMark = 1.88;
// heightJohn = 1.76;
// massMark = 95;
// massJohn = 85;

// const BMIJohn2 = massJohn / heightJohn ** 2;
// const BMIMark2 = massMark / heightMark ** 2;

// if (BMIJohn2 > BMIMark2) {
//   console.log(`John's BMI (${BMIJohn2}) is higher than Mark's (${BMIMark2})`);
// } else {
//   console.log(`Mark's BMI ${BMIMark2} is higher than John's BMI (${BMIJohn2})`);
// }
// Coding challenge 3

// const avgScoreDolphins = (96 + 108 + 89) / 3;
// const avgScoreKoalas = (88 + 100 + 110) / 3;

// if (avgScoreDolphins > avgScoreKoalas) {
//   console.log("Dolphins wins!");
// } else if (avgScoreKoalas === avgScoreDolphins) {
//   console.log("Draw!");
// } else {
//   console.log("Koalas wins!");
// }

// Bonus 1

// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 123) / 3;

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//   console.log("Dolphins wins!");
// } else if (avgScoreKoalas === avgScoreDolphins) {
//   console.log("Draw!");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//   console.log("Koalas wins!");
// }

// Bonus 2

// const avgScoreDolphins = (97 + 112 + 80) / 3;
// const avgScoreKoalas = (109 + 95 + 50) / 3;

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//   console.log("Dolphins wins!");
// } else if (
//   avgScoreKoalas === avgScoreDolphins &&
//   avgScoreKoalas >= 100 &&
//   avgScoreDolphins >= 100
// ) {
//   console.log("Draw!");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//   console.log("Koalas wins!");
// } else {
//   console.log("No one wins 😭");
// }

// Coding challenge 4

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the final value ${bill + tip}`
);
