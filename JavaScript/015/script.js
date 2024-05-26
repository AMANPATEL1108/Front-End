const element = document.getElementsByClassName("block");
console.log(element);

for (let i = 0; i < element.length; i++) {
  element.item(i).style.background = "Blue";
}
