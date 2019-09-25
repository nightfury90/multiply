module.exports = function multiply(first, second) {
  // your solution
  let a = BigInt(first);
  let b = BigInt(second);
  let result = (a * b).toString();

  return result;
}
