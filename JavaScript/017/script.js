const button = document.getElementById("clickbutton");
const container = document.getElementById("my-container");

let count = 1;

button.addEventListener("click", () => {
  const el = document.createElement("li"); //h1
  el.innerText = count; //AMAN PATEL
  container.appendChild(el);
  count++;
});
