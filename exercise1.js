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
    throw new Error(
      `${order} is not a valid order. Options are byWord, byLength, or byConsonants.`
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

try {
  console.log(sortWords(inputWords, "byWord", "ascending"));
} catch (e) {
  console.error(e.message);
}

let inputLength = ["aaaaa", "aaa", "aaaaaa", "aa", "aaaaaaa", "a", "aaaa"];
try {
  console.log(sortWords(inputLength, "byLength", "descending"));
} catch (e) {
  console.error(e.message);
}

let inputConsonants = [
  "aeiobcdf",
  "aeibcd",
  "aeaeaeaeb",
  "aaaaaaebc",
  "aeioubcdfg",
];
try {
  console.log(sortWords(inputConsonants, "byConsonants", "ascending"));
} catch (e) {
  console.error(e.message);
}
