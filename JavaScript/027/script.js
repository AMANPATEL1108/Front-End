//IIFE-Immediately Invoked Function Expression

// (function add(a, b) {
//   let age = 20;
//   console.log(a + b);
// })(2, 3);

// (function say() {
//   console.log("Hey");
// })();

// (() => console.log("I am AMAN"))();

// const value = (() => 100)();
// console.log(value);

// const data = (async () => await fetch())();

const atm = function (initialbalance) {
  let balance = initialbalance;
  function withrew(atm) {
    if (atm > balance) {
      console.log("Are you Kidding");
    } else {
      balance -= atm;
      return balance;
    }
  }
  return { withrew };
};

const aman = atm(1000);
console.log(aman.withrew(100));
console.log(aman.withrew(100));
console.log(aman.withrew(100));
