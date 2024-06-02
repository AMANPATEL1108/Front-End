const button = document.getElementById("stopbutton");

function showTime() {
  const currentTime = new Date();

  console.log(currentTime);
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
}

let interval = setInterval(showTime, 1000);

button.addEventListener("click", () => {
  clearInterval(interval);
});
