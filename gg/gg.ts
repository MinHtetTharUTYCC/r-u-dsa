// Integer division
console.log(Math.floor(7 / 2)); // 3 toward negative infinity
console.log(Math.trunc(7 / 2)); // 3 toward zero
console.log(Math.ceil(7 / 2)); // 3 toward positive infinity

// For positive numbers, floor and trunc are the same
// For negative numbers, they differ:
console.log(Math.floor(-7 / 2)); // -4 toward negative infinity
console.log(Math.trunc(-7 / 2)); // -3 toward zero

const big: bigint = 9007199254740993n; // ** the 'n' suffix
const result: bigint = big * 2n; // BigInt arithmetic
// Cannot mix: big + 1 throws TypeError. Must use big + 1n
console.log(result); // 18014398509481986n

const left = 1;
const right = 10;

// WRONG: produces a float, not an integer
const mid = (left + right) / 2;

// RIGHT: produces an integer
const midInt = Math.floor((left + right) / 2);
console.log(midInt); // 5

// ternary operator
const a = 10;
const b = 20;
const resultTer = a > b ? a : b; // Math.max(a,b)
console.log(resultTer); // 20
