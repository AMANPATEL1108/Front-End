const Susan = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  hobbies: {
    hobby1: "singing",
    hobby2: "dancing",
  },
};

const { age, ...rest } = Susan;
console.log(age, rest);

// 14
// {
// firstName: "Susan" ,
// lastName: "Steward" ,
// hobbies: {...}
// }