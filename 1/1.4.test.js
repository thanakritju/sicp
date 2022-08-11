const { a_plus_abs_b } = require("./1.4");

test("a_plus_abs_b should return correct value", () => {
  [
    [1, 1, 2],
    [1, -2, 3],
  ].forEach(([a, b, expected]) => {
    const ans = a_plus_abs_b(a, b);

    expect(ans).toBe(expected);
  });
});
