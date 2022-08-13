function sum_of_square_largest_two(x, y, z) {
  function sum_of_square(a, b) {
    return a * a + b * b;
  }
  return x > y
    ? y > z
      ? sum_of_square(x, y)
      : sum_of_square(x, z)
    : z > x
    ? sum_of_square(z, y)
    : sum_of_square(x, y);
}

exports.sum_of_square_largest_two = sum_of_square_largest_two;
