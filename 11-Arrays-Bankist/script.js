'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  console.log(acc);
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

// Event handler
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // Slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // Splice
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // Reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // Join
// console.log(letters.join(' - '));

// // The new at method

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// // Looping array foreach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log(`---- FOREACH ----`);
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ...

// // forEach with maps and sets

// // Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}:${value}`);
// });

// // map Method

// const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) => {
//   `Movement ${i + 1}: You ${mov > 0 ? 'depostied' : 'withdrew'} ${Math.abs(
//     mov
//   )}`;
// });
// console.log(movementsDescriptions);

// // filter Method

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrawals);

// console.log(movements);

// // accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   return mov > acc ? (acc = mov) : acc;
// }, movements[0]);
// console.log(max);

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// // find Method

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// let accountFor;
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     accountFor = acc;
//   }
// }
// console.log(accountFor);

// // some and every

// console.log(movements);

// // EQUALITY
// console.log(movements.includes(-130));

// // CONDITION
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// // every

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Seperate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// // flat and flatmap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// // Sorting

// // Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // Numbers

// console.log(movements);

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (b > a) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

// // More ways of creating filling arrays

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // Empty arrays + fill method;
// const x = new Array(7);
// console.log(x);

// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (curr, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// // .filter(mov => mov >= 1000).length;

// console.log(numDeposits1000);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// const diceRolls = Array.from({ length: 100 }, () =>
//   Math.trunc(Math.random() * 6 + 1)
// );
// console.log(diceRolls);

// // Coding Challenge 1

// // Data 1
// const julia1 = [3, 5, 2, 12, 7];
// const kate1 = [4, 1, 15, 8, 3];

// // Data 2
// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const correctedJulia = dogsJulia.slice(1, -2);
//   const allAgesArr = correctedJulia.concat(dogsKate);

//   allAgesArr.forEach(function (age, i) {
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age}, `);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };
// checkDogs(julia1, kate1);
// checkDogs(julia2, kate2);

// Challenge 2

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   const dogsOver18 = humanAge.filter(dog => dog >= 18);
//   // Mój
//   // const avarageAdultDogAge =
//   // dogsOver18.reduce((avg, dog) => avg + dog, 0) / dogsOver18.length;
//   // Inny
//   const avarageAdultDogAge = dogsOver18.reduce(
//     (avg, dog, i, arr) => avg + dog / arr.length,
//     0
//   );
//   return avarageAdultDogAge;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// // Coding challenge 3

// const calcAverageHumanAge = function (ages) {
//   const avarage = ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((avg, age, i, arr) => avg + age / arr.length, 0);
//   return avarage;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Coding challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));
console.log(dogs);

// Moje
const sarahDog = dogs.find(dog => {
  for (const owner of dog.owners) {
    if (owner === 'Sarah') {
      return owner;
    }
  }
});

// Fajne

// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(
  `Sarah dog is eating ${
    sarahDog.curFood < sarahDog.recommendedFood ? 'less' : 'more'
  } food`
);

const ownersEatTooMuch = dogs
  .flatMap(dog => (dog.curFood > dog.recommendedFood ? dog.owners : undefined))
  .filter(owner => owner !== undefined);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .flatMap(dog => (dog.curFood < dog.recommendedFood ? dog.owners : undefined))
  .filter(owner => owner !== undefined);
console.log(ownersEatTooLittle);

console.log(ownersEatTooMuch.join(' and ') + `'s dogs eat too much!`);
console.log(ownersEatTooLittle.join(' and ') + `'s dogs eat too little!`);

const exacltyAmountFood = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(exacltyAmountFood);

const goodAmountFood = dogs.some(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(goodAmountFood);

const goodEatingDogs = dogs
  .map(dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
      ? dog
      : undefined
  )
  .filter(dog => dog !== undefined);

console.log(goodEatingDogs);

const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
