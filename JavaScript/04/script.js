//condition and switch statement

//-------------------if else---------------------------
// const age = 22;
// if (age >= 18) {
//   console.log("You can vot");
// } else {
//   console.log("You can't vot");
// }
// if (age >= 80) {
//   console.log("Yes you are an adult");
// } else if (age >= 18) {
//   console.log("You can vot");
// } else {
//   console.log("You can't vot");
// }

//------------------------------------ternary Operators--------------------------------------------
// const age = 90;

// // age >= 18 ? console.log("You can vot") : console.log("You can't vot");

// //define
// let result = age >= 18 ? "yes" : "No";
// console.log(result);

//----------------------switch Case------------------------------

// const option = 2;

// switch (option) {
//   case 1:
//     {
//       console.log("This is 1 option");
//     }
//     break;
//   case 2:
//     {
//       console.log("This is 2 option");
//     }
//     break;

//   case 3:
//     {
//       console.log("This is 3 option");
//     }
//     break;

//   default:
//     console.log("Enter a Correct Number");
//     break;
// }
//Example----
let a = 30;
let opt = "*";
let b = 40;

switch (opt) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;

  default:
    console.log("Enter a correcet operation");
    break;
}
