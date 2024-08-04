// // function handleButtonClick() {
// //   console.log("that button is clicked");
// //   alert("Hey i a clicked");
// // }

// const el = document.getElementById("clickbutton");

// // el.onclick = function () {
// //   console.log("Hey i am cliced");
// //   alert("THis is clicked on button");
// // };

// const nameblock = document.getElementById("name-Block");

// el.addEventListener("click", () => {
//   if (nameblock.style.color === "red") {
//     nameblock.style.color = "blue";
//   } else {
//     nameblock.style.color = "red";
//   }
// });

const allchilderen = document.querySelector("body").children;

for (let i = 0; i < allchilderen.length; i++) {
  allchilderen.item(i).addEventListener("click", () => {
    allchilderen.item(i).remove();
  });
}
