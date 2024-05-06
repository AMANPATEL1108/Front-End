// // function eventfunction() {
// //   console.log(" clicked on this event");
// // }
// // document.addEventListener("click", eventfunction);

// const content = document.querySelector("#wrapper");

// content.addEventListener("click", function (event) {
//   console.log(event);
// });

let links = document.querySelectorAll("a");
let thirdLink = links[2];

thirdLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Maza aya , acha laga");
});
