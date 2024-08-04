const el = document.getElementById("username");

// console.log(el);

el.innerText = "AMAN PATEL";

el.classList.add("red-color", "underline");
console.log(el.classList);

el.classList.remove("red-color");

el.style.textDecoration = "underline";
el.style.color = "tomato";

console.log(el.parentElement);
el.parentElement.style.background = "grey";

console.log(el);
console.log(el.id);
el.remove();
