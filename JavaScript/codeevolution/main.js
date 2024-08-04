// // console.log("Hello from main.js");

// // //variable

// // let age = 25;
// // console.log(age);

// // const salary = 80000; //using const not redefine that value;
// // console.log(salary);

// // let sum = 0;
// // sum = 5;
// // console.log(sum);

// //datatypes--------------------------------------------------------------------------------

// //String
// const name = "aman";
// const language = "Js";
// const channel = "Error";

// //Number
// const total = 0;
// const PI = 3.14;

// //Boolean
// const isPrimaryNumber = true;
// const isNewUser = false;

// let result;
// console.log(result);

// const res = null;
// const data = null;

// //object--------------------------------------------------------------------------------------------
// const person = {
//   firstName: "aman",
//   lastName: "patel",
//   age: 30,
// };

// console.log(person.firstName);
// // console.log(person);

// const oddNumber = [1, 3, 5, 7, 9];
// console.log(oddNumber[0]);
// console.log(oddNumber[3]);

// let a = 10;
// a = "aman";
// a = true; //last assigned value
// console.log(a);

//Operators--------------------------------------------------------------------------------------------
//Assignment Operators
// let x = 10;

// //arithmetic
// let y = 5;
// console.log(x + y);
// console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x % y);
// // console.log(++x);
// // console.log(--y);

// //Comparision
// // console.log(x === y);
// // console.log(x !== y);
// console.log(x >= y);
// // console.log(x <= y);
// // console.log(x > y);
// // console.log(x < y);

// //logical operators

// const isValidNumber = x > 8 && 8 > y; //   other =||
// console.log(isValidNumber);

// const isValid = false;
// console.log(!isValid);

// console.log("aman " + "Patel"); //concationation

// const isEven = 10 % 2 === 0 ? "number is Even" : "number is odd";
// console.log(isEven);

//Typer Conversion---------------------------------------------------------------------------------------------
// console.log(true + "3"); //true3
// console.log("4" - "2"); //2
// console.log("Bruce" - "Wayne");
// console.log("5" - null);
// console.log(5 + undefined);

// console.log(Number("5"));
// console.log(Number(false));
// console.log(Number());

// console.log(parseFloat("3.14"));
// console.log(String(500));
// console.log(String(null));
// console.log((500).toString());

// console.log(Boolean(10)); //null undefined 0 '' NaN-false

//Equality-------------------------------------------------------------------

// const var1 = 10;
// const var2 = "10";
// console.log(var1 == var2);
// console.log(var1 === var2);

//condition Statements-------------------------------------------------------------------------------

// const num = 0;

// if (num > 0) {
//   console.log("Number is Positive");   //if true condition
// } else {
//   console.log("Number is Not Positive");  //false Condition
// }

// if (num > 0) {
//   console.log("Number is Positive"); //Check First Condition
// } else if (num < 0) {
//   console.log("Number is Not Positive"); //Check second condition
// } else {
//   console.log("Number is zero"); //false Condition
// }

// const color = "green";

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;

//   default:
//     console.log("Not Valid Color");
// }

//Looping Code-------------------------------------------------------------------------------------
// for (let i = 1; i <= 5; i++) {
//   console.log("Interation Numbaer is:" + i);
// }
//---------------
// let i = 1;
// while (i <= 5) {
//   console.log("Iteration Number is:" + i);
//   i++;
// }
//-----------------
// let i = 1;
// do {
//   console.log("Iteration Number is:" + i);
//   i++;
// } while (i <= 5);
//----------------------------------------------------------------
// const NumArray = [1, 2, 3, 4, 5];
// // first method
// for (const num of NumArray) {
//   console.log("Iteration Number" + num);
// }
//-----------seconde method
// for (let i = 0; i <= NumArray.length; i++) {
//   console.log(NumArray[i]);
// }
//-----------

//---------------------Functions----------------------------------------------------
// function greet(username) {
//   console.log("Good Morning " + username);
// }
// greet('aman');
// greet('guru');
// greet("Rushi");

// function add(a, b) {
//   return a + b;
// }
// const sum = add(2, 3);
// const sum2 = add(5, 7);
// console.log(sum);
// console.log(sum2);

//using arrow Function------------------

// const arrowSum = (a, b) => {
//   return a + b;
// };
//----------or--------
// const arrowSum = (a, b) => a + b;
// const addFive = (num) => num + 5;

// //--output
// const sum = arrowSum(5, 7);
// const sum2 = addFive(5);
// console.log(sum);
// console.log(sum2);

//Scopr-------------------------------------------------------------------------
const myNum = 100;
const myName = "Bucher";

if (true) {
  const myName = "aman";
  console.log(myName);
  console.log(myNum);
}
//--
function testFn() {
  const myName = "patel";
  console.log(myName);
  console.log(myNum);
}
testFn();
console.log(myName);
console.log(myNum);
