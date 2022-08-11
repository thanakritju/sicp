function sum_of_largest_two(x, y, z) {
  sum = 0;

  if (x > y) {
    sum += x * x;
    if (y > z) {
      sum += y * y;
    } else {
      sum += z * z;
    }
  } else {
    sum += y * y;
    if (z > x) {
      sum += z * z;
    } else {
      sum += x * x;
    }
  }

  return sum;
}

exports.sum_of_largest_two = sum_of_largest_two;
