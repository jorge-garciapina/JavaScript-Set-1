function vowelsDigits(inpt) {
  if (typeof inpt === "number") {
    // Logaritmic solution:
    return (
      "-" +
      inpt +
      "- has: " +
      String(Math.floor(Math.log10(inpt)) + 1) +
      " digits"
    );
  }
  // Vowels solution
  // I used a regular expression to extract the
  // vowels in the input
  else {
    const regexVowels = /[aeiouAEIOU]/g;
    let matches = inpt.match(regexVowels);
    if (!matches) {
      return "-" + inpt + "- has -" + 0 + "- vowels";
    } else {
      return (
        "-" + inpt + "- has -" + inpt.match(regexVowels).length + "- vowels"
      );
    }
  }
}

// This is just a definition that allow the code
// to have random whole numbers
// with different number of digits.
let variableDigits = Math.floor(
  Math.pow(Math.random() * 100, Math.random() * 10)
);

console.log(vowelsDigits(variableDigits));

// let fixedLetters = "aabbccddeeffg";
let fixedLetters = "why";
console.log(vowelsDigits(fixedLetters));
