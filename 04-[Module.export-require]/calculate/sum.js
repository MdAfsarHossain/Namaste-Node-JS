let x = "export in React exports in Node";

// Calculate Sum Function
function calculateSum(a, b) {
  let sum = a + b;
  console.log(sum);
}

console.log(module.exports); 

module.exports = {
  x,
  calculateSum,
};
