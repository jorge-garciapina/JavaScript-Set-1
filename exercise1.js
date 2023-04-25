function sortWords(words, order, ascending) {
  let output = [];

  if (order === "byWord") {
    output = words.sort(function (a, b) {
      return a.localeCompare(b);
    });
  } else if (order === "byLength") {
    output = words.sort(function (a, b) {
      return a.length - b.length;
    });
  } else if (order === "byConsonants") {
    output = words.sort(function (a, b) {
      let countConsonants = function (str) {
        let consonants = str.match(/[b-df-hj-np-tv-z]/gi);
        return consonants ? consonants.length : 0;
      };

      return countConsonants(a) - countConsonants(b);
    });
  } else {
    console.log(
      `${order} is not valid order options (byWord, byLength, byConsonants)`
    );
  }

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

let inputConsonants = [
  "aeiobcdf",
  "aeibcd",
  "aeaeaeaeb",
  "aaaaaaebc",
  "aeioubcdfg",
];
console.log(sortWords(inputConsonants, "byConsonants", "ascending"));
