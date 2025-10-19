require("./xyx");
// const { x, calculateSum } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply");
const { calculateMultiply, calculateSum } = require("./calculate");
const data = require("./data.json");
console.log(data);

console.log("Hello Node JS World");
let name = "Node JS e3";
let a = 5;
let b = 3;

calculateSum(a, b);
calculateMultiply(a, b);

// node app.js
