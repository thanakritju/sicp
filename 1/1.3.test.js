const { sum_of_largest_two } = require("./1.3");

test("sum_of_largest_two should return correct value", () => {
  [
    [1, 1, 1, 2],
    [1, 1, 2, 5],
    [8, 1, 4, 80],
    [-8, -1, 4, 17],
    [-8, -1, -4, 17],
    [0, 0, 0, 0],
  ].forEach(([x, y, z, expected]) => {
    const ans = sum_of_largest_two(x, y, z);

    expect(ans).toBe(expected);
  });
});
