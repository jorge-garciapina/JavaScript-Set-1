// For the logarithmic solution I used the next logic:
// The first 5 powers of 10 are:
// 10^0 = 1
// 10^1 = 10
// 10^2 = 100
// 10^3 = 1000
// 10^4 = 10000
// 10^5 = 100000

// Their logarithms base 10 are:
// log_10(10^0) = 0
// log_10(10^1) = 1
// log_10(10^2) = 2
// log_10(10^3) = 3
// log_10(10^4) = 4
// log_10(10^5) = 5

// The code uses this 2 ideas as follows:
// input = 365
// 365 <= 10^0? - no, next iteration
// 365 <= 10^1? - no, next iteration
// 365 <= 10^2? - no, next iteration
// 365 <= 10^3? - yes... return log_10(10^3) = 3

function vowelsDigits(inpt) {
  if (typeof inpt === "number") {
    // Logaritmic solution:
    let i = 0;
    while (true) {
      if (Math.pow(10, i) >= inpt) {
        return "-" + inpt + "- has: " + Math.log10(Math.pow(10, i)) + " digits";
      }
      i++;
    }
  }
  // Vowels solution
  // I used a regular expression to extract the
  // vowels in the input
  else {
    const regexVowels = /[aeiouAEIOU]/g;
    return (
      "Input has the folowing vowels: -" +
      inpt.match(regexVowels).join("") +
      "-"
    );
  }
}

// This is just a definition that allow the code
// to have random whole numbers
// with different number of digits.
let variableDigits = Math.floor(
  Math.pow(Math.random() * 100, Math.random() * 10)
);

console.log(vowelsDigits(variableDigits));

let fixedLetters = "aabbccddeeffg";
console.log(vowelsDigits(fixedLetters));
