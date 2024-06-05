// Promisification

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) return result(error);
        return resolve(result);
      });
    });
  };
}

const loadScripNew = promisify(loadScript);

//without promise

function loadScript(src, callbacck) {
  const script = document.createElement("script");

  script.src = src;

  script.onload = () => callbacck(null, script);

  script.onerror = (err) => callbacck(err);

  document.head.appendChild(script);
}

loadScripNew("test.js").then(() => console.log("Done"));
loadScripNew("test.js")
  .then(() => console.log("Done"))
  .catch((err) => console.log("error hogaya"));

(async () => {
  try {
    const result = await loadScripNew("test.js");
    console.log("Done");
  } catch (error) {
    console.log(error);
  }
})();

// loadScript("test.js", (err, screen) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Script Load");
//   }
// });
