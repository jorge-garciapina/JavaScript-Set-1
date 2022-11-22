function sortWords(words, byLetter, byLength, byConsonants, ascending) {
  // This object is used to order the letters:
  const letters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  // This will be the output. The result change depending upon
  // the inputs given by the user:
  let output = [];
  // --------------START: PART 1 -----------------------
  // PART 1: ARRAY ORDERED BY LETTER:
  if (byLetter === true && byLength === false && byConsonants === false) {
    for (let word of words) {
      if (output.length === 0) {
        output.push(word);
      } else {
        for (let i = 0; i <= output.length - 1; i++) {
          if (letters[word[0]] <= letters[output[i][0]]) {
            output.splice(i, 0, word);
            break;
          } else if (letters[word[0]] > letters[output[output.length - 1][0]]) {
            output.push(word);
            break;
          }
        }
      }
    }
  }
  // --------------END: PART 1 -----------------------

  // --------------START: PART 2 -----------------------
  // PART 2: ARRAY ORDERED BY LENGTH.
  else if (byLetter === false && byLength === true && byConsonants === false) {
    for (let word of words) {
      if (output.length === 0) {
        output.push(word);
      } else {
        for (let i = 0; i <= output.length - 1; i++) {
          if (word.length <= output[i].length) {
            output.splice(i, 0, word);
            break;
          } else if (word.length > output[output.length - 1].length) {
            output.push(word);
            break;
          }
        }
      }
    }
  }
  // -----------------END: PART 2 -----------------------

  // --------------START: PART 3 -----------------------
  // PART 3: ARRAY ORDERED BY CONSONANTS.
  else if (byLetter === false && byLength === false && byConsonants === true) {
    for (let word of words) {
      word = word.match(/[^aeiou]/g).join("");
      console.log(word);
      if (output.length === 0) {
        output.push(word);
      } else {
        for (let i = 0; i <= output.length - 1; i++) {
          if (word.length <= output[i].length) {
            output.splice(i, 0, word);
            break;
          } else if (word.length > output[output.length - 1].length) {
            output.push(word);
            break;
          }
        }
      }
    }
  }
  // --------------END: PART 3 -----------------------

  // This is in case the input is not correct
  else {
    return -1;
  }

  // To retrieve the result in ascending or descending order:
  if (ascending === true) {
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

console.log(sortWords(inputWords, true, false, false, true));

let inputLength = ["aaaaa", "aaa", "aaaaaa", "aa", "aaaaaaa", "a", "aaaa"];
console.log(sortWords(inputLength, false, true, false, true));

let inputConsonants = ["aeiobcdf", "aeibcd", "ab", "aebc", "aeioubcdfg"];
console.log(sortWords(inputConsonants, false, false, true, true));
