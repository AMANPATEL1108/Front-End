function add(a, b) {
  return a + b;
}

function multiply(args) {
  return args[0] * args[1];
}

function square(val) {
  return val * val;
}

// function addTwoandSqare(a, b) {
//   return square(add(a, b));
// }

// const addResult = add(2, 3);
// console.log(square(addResult));

function composeTwoFunction(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

function compose(...fns) {
  return function (...value) {
    return fns.reduce((a, b) => b(a), value);
  };
}

const composeAll =
  (...fns) =>
  (...val) =>
    fns.reduce((a, b) => b(a), val);

const c2f = (fn1, f2) => (a, b) => f2(fn1(a, b));

// console.log(addTwoandSqare(2, 3));

const task = composeAll(multiply, square, (val) => val + 2);

console.log(task(3, 1));
