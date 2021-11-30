const reverseWords = (sentence) => {
  // Array to store the reversed words
  const reversedWords = [];
  const regex = /\W/g;
  sentence = sentence.replace(regex, " ");

  for (word of sentence.split(" ")) {
    // Split the word into array -> reverse the array -> turn the array back to string
    let reverse = word.split("").reverse().join("");

    // Check if the word is single ('A', 'a') if true -> push to the reversedWords array
    // Check if the word is capitalized
    if (word.length === 1) {
      reversedWords.push(reverse);
    } else if (isCapital(word)) {
      reversedWords.push(capitalLast(word));
    } else {
      reversedWords.push(reverse.toLowerCase());
    }
  }

  // Turn the array back to string
  return reversedWords.join(" ");
};

// Check if the word is capitalized or not
const isCapital = (word) => {
  const firstLetter = word.charAt(0);
  const regex = /[A-Z]/; // check uppercase using regex

  return regex.test(firstLetter);
};

const capitalLast = (word) => {
  // Make the string into lowercase and then split it into array string
  splitWord = word.toLowerCase().split("");
  // Reverse the array string
  splitWord.reverse();
  // Capitalize the word
  splitWord[0] = splitWord[0].toUpperCase();
  // Join the separated word and return it
  return splitWord.join("");
};

module.exports = reverseWords;
