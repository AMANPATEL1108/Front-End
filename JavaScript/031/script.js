const colorCodeContainer = document.getElementById("color-code");
const optionContainer = document.querySelector(".option-container");
const scoreContainer = document.getElementById("score");

function generateRandomNumberBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandomColorRGB() {
  const red = generateRandomNumberBetween(0, 255);
  const green = generateRandomNumberBetween(0, 255);
  const blue = generateRandomNumberBetween(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore() {
  let score = parseInt(localStorage.getItem("score")) || 0;
  score += 1;
  localStorage.setItem("score", score);
  scoreContainer.textContent = score;
}

function resetScore() {
  localStorage.setItem("score", 0);
  scoreContainer.textContent = 0;
}

function validateResult(el, randomColor) {
  const selectedColor = el.target.style.backgroundColor;
  if (selectedColor === randomColor) {
    incrementScore();
    colorCodeContainer.textContent = "Correct!";
    colorCodeContainer.style.color = "green";
  } else {
    resetScore();
    colorCodeContainer.textContent = "Wrong!";
    colorCodeContainer.style.color = "red";
  }
  startGame();
}

function startGame() {
  optionContainer.innerHTML = null;
  const randomColor = generateRandomColorRGB();
  colorCodeContainer.textContent = randomColor;
  colorCodeContainer.style.color = "black";

  const ansIndex = generateRandomNumberBetween(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor =
      i === ansIndex ? randomColor : generateRandomColorRGB();
    div.addEventListener("click", (el) => validateResult(el, randomColor));
    optionContainer.appendChild(div);
  }

  let score = parseInt(localStorage.getItem("score")) || 0;
  scoreContainer.textContent = score;
}

window.addEventListener("load", () => startGame());
