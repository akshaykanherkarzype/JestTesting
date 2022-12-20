const { sum, sub, mul, division } = require("./demo");

describe("Jest Testing", () => {
  test("test for sum of two numbers", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("test for substraction of two numbers", () => {
    expect(sub(6, 4)).toBe(2);
  });

  test("test for multiplication of two numbers", () => {
    expect(mul(3, 3)).toBe(9);
  });

  test("test for division of two numbers", () => {
    expect(division(9, 3)).toBe(3);
  });
});
