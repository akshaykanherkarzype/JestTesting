const { sum, sub, mul, division, addCallback } = require("./demo");

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

  test("Common Matchers", () => {
    expect(2 + 2).toBe(4);
    expect(2 + 2).not.toBe(3);
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test("Truthiness tests", () => {
    const n = null;
    expect(n).toBe(null);
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test("Numbers tests", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(5.5);

    //For the Float
    const value2 = 0.1 + 0.2;
    expect(value2).toBeCloseTo(0.3);
  });

  test("Strings tests", () => {
    expect("team").not.toMatch(/I/);
    expect("Cristoph").toMatch(/stop/);
  });

  test("Arrays and iterables", () => {
    const shoppingList = [
      "diapers",
      "kleenex",
      "trash bags",
      "paper towels",
      "milk",
    ];
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });

  function compileAndroidCode() {
    throw new Error("you are using wrong jdk!");
  }
  test("Exceptions tests", () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  });
});
