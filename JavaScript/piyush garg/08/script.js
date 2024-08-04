//Arrow Functions

//1.Syntax-------------------------
// const sayHello = () => {
//   console.log("Hello it's Me");
// };
// sayHello(2, 3);

// const add = (a, b) => {
//   return a + b;
// };
// const addb2 = (a, b) => a + b;
// console.log(add(2, 3));
// console.log(addb2(3, 7));

// //2.Argument---------------------------------------

// const addNumber = (...nums) => {
//   console.log(nums);
// };
// addNumber(10, 22, 33, 44);

//3.Hosting---------------------------------------
//before define or after define then they are work(in Arrow not Working)
sayHey();

function sayHey() {
  console.log("Heyy There");
}

//4.This KeyWord-----------------------------------

const obj = {
  value: 20,
  myfunction: function () {
    console.log("value is" + this.value);
  },
};

obj.myfunction();
