const { sqrt } = require("./1.7");

test("sqrt should return correct value", () => {
  [
    [0.01, 0.1],
    [1, 1],
    [25, 5],
    [25000000000000000000000000000000000000000000, 5000000000000000000000],
  ].forEach(([a, expected]) => {
    const ans = sqrt(a);

    expect(ans).toBeCloseTo(expected);
  });
});

test("sqrt should fail on small value", () => {
  [[0.00000000001, 0.000001]].forEach(([a, expected]) => {
    const ans = sqrt(a);

    expect(ans).not.toBeCloseTo(expected);
  });
});
