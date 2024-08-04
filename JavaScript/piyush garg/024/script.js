// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3));

// function sendAutoEmail(to) {
//   return function (subject) {
//     return function (body) {
//       console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);
//     };
//   };
// }

const sendAutoEmail = (to) => (subject) => (body) =>
  `Sending Email to ${to} with subject ${subject}: ${body}`;

let step1 = sendAutoEmail("amanap1108@gmai.com");
let step2 = step1("new Order Confirmation");

console.log(step2("Hey AMAN ,Here is Something for You"));
