//High Order Function and Callback

function add(a, b, cd) {
  let result = a + b;
  cd(result);

  return () => console.log(result);
}

// function showResult(result) {
//   console.log(result);
// }

// showResult();

// add(2, 4, function (val) {
//   console.log(val);
// });

let resultfunction = add(2, 4, () => {});
resultfunction();

// add(400, 10, (res) => console.log(res));
