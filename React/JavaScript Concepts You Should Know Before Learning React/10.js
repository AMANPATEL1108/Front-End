let fruits = ["Mango", "Pineapple", "Orange", "Lemon", "Apple"];

const [firstFruit, secondFruit, ...rest] = fruits;

console.log(firstFruit, secondFruit, rest); //"Mango" "Pineapple" ["Orange","Lemon","Apple"]

const chosenFruit = rest.find((fruit) => fruit === "Apple");

console.log(`This is an ${chosenFruit}`); //"This is an Apple"
