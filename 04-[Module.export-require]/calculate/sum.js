let x = "export in React exports in Node";

// Calculate Sum Function
function calculateSum(a, b) {
  let sum = a + b;
  console.log(sum);
}

console.log(module.exports); // {} It's means empty

module.exports = {
  x,
  calculateSum,
};
