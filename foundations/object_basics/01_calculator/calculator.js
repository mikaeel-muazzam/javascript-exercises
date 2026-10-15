const add = function(numA, numB) {
	return numA + numB;
};

const subtract = function(numA, numB) {
	return numA - numB;
};

const sum = function(nums) {
	return nums.reduce((prev, val) => {
    return add(prev, val);
  }, 0);
};

const multiply = function(nums) {
  return nums.reduce((prev, val) => {
    return prev *= val;
  }, 1);
};

const power = function(numA, numB) {
	return numA ** numB;
};

const factorial = function(number) {
	let wholes = [];
  for (let i = number; i >= 1; i--) {
    wholes.push(i);
  } 
  return multiply(wholes);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
