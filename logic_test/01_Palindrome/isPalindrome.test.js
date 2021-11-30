const isPalindrome = require("./isPalindrome");

// isPalindrome === true
test("Radar", () => {
  expect(isPalindrome("Radar")).toEqual(true);
});
test("Ra_d@@@@ar", () => {
  expect(isPalindrome("Ra_d@@@@ar")).toEqual(true);
});
test("Malam", () => {
  expect(isPalindrome("Malam")).toEqual(true);
});
test("     Malam   ", () => {
  expect(isPalindrome("     Malam   ")).toEqual(true);
});
test("Kasur ini rusak", () => {
  expect(isPalindrome("Kasur ini rusak")).toEqual(true);
});
test("Ibu Ratna antar ubi", () => {
  expect(isPalindrome("Ibu Ratna antar ubi")).toEqual(true);
});

// isPalindrome === false
test("Malas", () => {
  expect(isPalindrome("Malas")).toEqual(false);
});
test("Makan nasi goreng", () => {
  expect(isPalindrome("Makan nasi goreng")).toEqual(false);
});
test("Balonku ada lima", () => {
  expect(isPalindrome("Balonku ada lima")).toEqual(false);
});
