let pets = ["cat", "dog", "rabbits"];

let carnivorous = ["lion", "wolf", "leopard", "tiger"];

// let animals = [pets, carnivorous];

// console.log(animals); //[["cat", "dog" , "rabbits"], ["lion", "wolf", "leopard", "tiger"]]

// let animals = [...pets, ...carnivorous];

// console.log(animals); //["cat", "dog" , "rabbits", "lion", "wolf", "leopard", "tiger"]

let name = { firstName: "John", lastName: "Doe" };
let hobbies = { hobby1: "singing", hobby2: "dancing" };
let myInfo = { ...name, ...hobbies };

console.log(myInfo); //{firstName:"John", lastName:"Doe", hobby1: "singing", hobby2: "dancing"}
