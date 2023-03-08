function sortWords(words, order, ascending) {

  // This will be the output. The result change depending upon
  // the inputs given by the user:
  let output = [];
  // --------------START: PART 1 -----------------------
  // PART 1: ARRAY ORDERED BY LETTER:
  if (order === "byWord") {
     output = words.sort(function (a, b) {
      return a.localeCompare(b);
    });
  }
  // --------------END: PART 1 -----------------------

  // --------------START: PART 2 -----------------------
  // PART 2: ARRAY ORDERED BY LENGTH.
  else if (order === "byLength") {
    output = words.sort(function (a, b) {
      return a.length - b.length;
    });
  }
  // -----------------END: PART 2 -----------------------

  // --------------START: PART 3 -----------------------
  // PART 3: ARRAY ORDERED BY CONSONANTS.
  else if (order === "byConsonants") {
    output = words.sort(function (a, b) {
      // -countConsonants- provides all the consonants
      // in a word.
      let countConsonants = function (str) {
        // Use a regular expression to match consonants
        let consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);

        // Return the length of the resulting array
        return consonants ? consonants.length : 0;
      };
      
      return countConsonants(a) - countConsonants(b);
    });
  }
  // --------------END: PART 3 -----------------------

  // This is in case the input is not correct
  else {
    console.log(
      `${order} is not valid order options (byWord, byLength, byConsonants)`
    );
  }

  // To retrieve the result in ascending or descending order:
  if (ascending === "ascending") {
    return output;
  } else {
    return output.reverse();
  }
}

let inputWords = [
  "bebida",
  "monitor",
  "babel",
  "program",
  "application",
  "keyboard",
  "javascript",
  "gaming",
  "network",
];
// Correct order: ["application","bebida", "babel, "gaming", "javascript", "keyboard", "monitor", "network", "program"];

console.log(sortWords(inputWords, "byWord", "ascending"));

let inputLength = ["aaaaa", "aaa", "aaaaaa", "aa", "aaaaaaa", "a", "aaaa"];
console.log(sortWords(inputLength, "byLength", "descending"));

let inputConsonants = ["aeiobcdf", "aeibcd", "ab", "aebc", "aeioubcdfg"];
console.log(sortWords(inputConsonants, "byConsonants", "ascending"));
