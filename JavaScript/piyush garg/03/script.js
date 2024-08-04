//Data Types
//---------------------------------------------
//Numberd

let num = 3.14;
let num2 = 10;

console.log(num + num2);

//----------------------------------------
//String
//single or double quot working
const firstName = "AMAN";
const lastName = "PATEL";

console.log(firstName + " " + lastName);

//------------------------------------------
//Boolean
let isLoggedIn = true;
console.log(isLoggedIn);

//---------------------------
//null
//not declare first value of that

let lastLoginDate = null;

//lastLoginDate = 10;

console.log(lastLoginDate);

//--------------------------------------------

//undefined
//deleting or remove the value
let lastLogin = undefined;

//lastLoginDate = 10;

console.log(lastLoginDate);

//-----------------------------------------------------

//object

const person = {
  firstName: "Aman",
  lastName: "Patel",
  age: 21,
  isLoggedIn: false,
  lastLoginDate: null,
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

//--------------------------------------------Operators-----------------------------------------------------------------------------------------------------------------------
let num3 = 3.14;
let num5 = 10;
let num6 = 25;

console.log(num5 - num3 + num6);
console.log(num5 * num6);
console.log(num6 / num5);

//js know 1 true and 0 false
if (1) {
  console.log("True");
}

let isthis = true;
console.log(isthis + 10);
//                1+10=11

//---------------------------------------------

//String '1'+1
// String and number mutiply then js know number og there string
console.log("1" + 1); //11
console.log("1" * 11); //11
console.log("a" * 1); //NaN
console.log("a" * 1); //a1

//---------------------------------------

//Typesof Operators
//null->Object

console.log(typeof ("123" * 1));
console.log(typeof "123");
