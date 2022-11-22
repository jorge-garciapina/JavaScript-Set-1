// 2.	Create a function that can limit the execution
// of other functions to a determined amount of times.
// I decided to solve this problem using a recursive call.
function limitFunc(fn, n = "recursiveCall") {
  // Part 1: This part is necessary because of the nature
  // of the solution: bacause this is a recursive call,
  // it is vital to differentiate between the function called
  // by the user, and the function called recursively.
  // This -if- says: when the function is called by the
  // user, save that values (because they will be refresh when
  // the recursive call is done)
  if (n !== "recursiveCall") {
    limit = n;
    output = fn;
  }

  // I used the structure try/catch because:
  // 1) The first time the function is called -if(i <= limit)-
  // will throw an error, and the -catch- will be activated
  // setting -i=0-. It is important to say that I read that
  // inside a function, variables declared without using -var, let or const-
  // become global variables.
  // 2) After the recursive call, -i- is defined and -if(i <= limit)-
  // will have not problems to execute, thus, we can limit the
  // number of executions.

  // -try- will execute after after the recursive called is made.
  try {
    if (i <= limit) {
      i++;
      return output();
    }
  } catch (ReferenceError) {
    // -catch- executes the first time the user calls the function:
    i = 0;
    return limitFunc;
  }
}

// Function inside
function dentro() {
  console.log("dentro");
}
let limited = limitFunc(dentro, 2);
limited();
limited();
limited();
limited();
limited();
limited();
limited();
