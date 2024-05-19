//Functions

// function sayHello() {
//   console.log("Hello AMAN!");
// }
// sayHello(); //calling of function

//Paramerters
// function add(a, b, c) {
//   console.log(a + b + c);
// return a + b;
// }
// add(5, 10, 15); //value pass karye
// add(1, 2, 3); //value pass

// function multiply(a, b) {
//   //   console.log(a * b);
//   return a * b;
// }

// let total = multiply(5, 6);
// console.log("They hey user result is ", total);

//unlimited argument accept
// function addNumber() {
//   let ans = 0;
//   for (let i = 0; i < arguments.length; i = i + 1) {
//     ans = ans + arguments[i];
//   }
//   return ans;
// }

function addNumberV2(...aman) {
  let ans = 0;
  for (let i = 0; i < numbers.length; i++) {
    ans = ans + aman[i];
  }
  return ans;
}

// let result = addNumber(10, 22, 31, 42, 55);

//Arrow Function
let result = addNumberV2(10, 22, 31, 42, 55);
console.log(result);
