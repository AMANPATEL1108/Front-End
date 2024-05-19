//Loops

//for Loops->If you know how many times to loop
// for (let i = 1; i <= 10; i++) {
//   console.log("AMAN");
//   console.log("AMAN" + i);
// }

//while Loop
/*
you 
*/

// let ip = 0;
// let house = 50;

// while (ip != house) {
//   ip = ip + 1;
//   console.log("Step Taken" + ip);
// }

//Do while Loop

// let ip = 50;
// let house = 50;

// do {
//   ip = ip + 1;
//   console.log("Step Taken" + ip);
// } while (ip <= house);

//Guess The Input

let number = 40;
let guess = 0;

do {
  guess = parseInt(prompt("Guess a Number"));
  if (guess == number) {
    break;
    alert("Winner");
  }
} while (guess != 0);

//in while Not working
// while (guess != 0) {
//   guess = parseInt(prompt("Guess a Number"));
//   if (guess == number) {
//     break;
//     alert("Winner");
//   }
// }
