//Iterators

// for (const val of [1, 2, 3, 4, 5]) {
//   console.log(val);
// }

function makeInterator(start = 0, end = Infinity, stepsize = 1) {}
//   let nextstart = start;
//   let iterationcount = 0;

//   return {
//     next() {
//       let result;
//       if (iterationcount < end) {
//         result = { value: nextstart, done: false };
//         nextstart = nextstart + stepsize;
//         iterationcount++;
//         return result;
//       }
//       return { value: iterationcount, done: true };
//     },
//   };
// }

// const myIterator = makeInterator(1, 10, 1);
// let result = myIterator.next();

// while (result.done) {
//   console.log(result.value);
//   result = myIterator.next();
// }


function count() {
  yield 2;
  yield 4;
  yield 5;
  yield 6;
  yield 8;
  yield 10;
  yield 12;
}

// console.log(count());

// const evens = count();

// for(const v of evens) {
//   console.log(v);
// }


function* makemyIteratorNew(start, end,stepsize=1) { 
  for (let i = start; i <= end; i+=stepsize){
    yield i;
  }
}


const one = makemyIteratorNew(1, 20,2);
// for(const val of one) {
//   console.log(val);
// }




const btn = document.getElementById("nextbtn")  


btn.addEventListener("click", () => {
  btn.innerText = one.next().value;
})