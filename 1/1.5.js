function p() {
  return p();
}
function test(x, y) {
  return x === 0 ? 0 : y;
}
test(0, p());
// normal-order evaluation -> will call function P imediately causing program to have indefinite calls
// applicative-order evaluation -> will not evaluate second argument of test function and will return 0
