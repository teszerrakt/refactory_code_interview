/*
    Input: String,
    Output: Boolean

    TODO:
    Check if the input is palindrome or not
*/

const isPalindrome = (str) => {
  const regex = /[\W_]/g; // regex for non-alphanumeric and _
  const sanitized = str.replace(regex, "").toLowerCase().split(""); // remove non-alphanumeric, _ and lowecase the string

  let start = 0;
  let end = sanitized.length - 1;

  while (start <= end) {
    if (sanitized[start] !== sanitized[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

module.exports = isPalindrome;
