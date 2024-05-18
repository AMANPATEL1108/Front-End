//HTML
<button class="btn">Click Me</button>;

//JavaScript
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let name = "John doe";
  console.log(name.toUpperCase());
});
