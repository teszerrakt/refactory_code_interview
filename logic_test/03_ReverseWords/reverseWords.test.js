const { expect } = require("@jest/globals");
const reverseWords = require("./reverseWords");

test("I am A Great human", () => {
  expect(reverseWords("I am A Great human")).toMatch("I ma A Taerg namuh");
});
test("yOOOOU", () => {
  expect(reverseWords("yOOOOU")).toMatch("uooooy");
});
test("Hey!", () => {
  expect(reverseWords("Hey!")).toMatch("Yeh");
});
test("A", () => {
  expect(reverseWords("A")).toMatch("A");
});
