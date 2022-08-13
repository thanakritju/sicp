function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}

function sqrt_iter(guess, x) {
  return conditional(
    is_good_enough(guess, x),
    guess,
    sqrt_iter(improve(guess, x), x)
  );
}

// this implemention is not working because with normal order evaluation it will evaluate the arguments when passing into a function
