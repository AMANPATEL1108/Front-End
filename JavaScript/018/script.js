let a = 10;
let b = 20;
let result = a + b;

// async function getData() {
//   let resultfromserver = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log(await resultfromserver.json());
// }

// getData();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(result);
