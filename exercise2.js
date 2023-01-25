// Solution based on the use of a closure to limit
// the number of executions.
function limitFunc(fn, num) {
  let counter = 0;
  return () => {
    counter++;
    if (counter <= num) {
      fn();
    }
  };
}

function exe() {
  console.log("Executed");
}
let limited = limitFunc(exe, 2);
limited();
limited();
limited();
limited();
limited();
limited();
limited();
