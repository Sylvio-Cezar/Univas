/* --- Lista de exercícios 05 --- */

// Filter
// 01
const filterPairNumbers = (arr) => {
    return arr.filter((num) => num % 2 === 0);
};

const inputFilterPairNumbers = [1, 2, 3, 4, 5, 6];
console.log(filterPairNumbers(inputFilterPairNumbers));

// 02
const filterLongerThanThree = (arr) => {
    return arr.filter((str) => str.length > 3);
};

const inputFilterLongerThanThree = ["a", "abcd", "efg", "dasd"];
console.log(filterLongerThanThree(inputFilterLongerThanThree));

// 03
const filterHasProperty = (arr, prop) => {
    return arr.filter((obj) => obj.hasOwnProperty(prop));
};

const inputFilterHasProperty = [
    { a: 1 },
    { b: 2 },
    { a: 3, b: 4 },
];
console.log(filterHasProperty(inputFilterHasProperty, "a"));

// 04
const filterMultipleOfThree = (arr) => {
    return arr.filter((num) => num % 3 === 0);
};

const inputFilterMultipleOfThree = [1, 2, 3, 4, 5, 6];
console.log(filterMultipleOfThree(inputFilterMultipleOfThree));

// 05
const filterMatrixSumGreaterThanTen = (matrix) => {
    return matrix.filter((row) => row.reduce((acc, val) => acc + val, 0) > 10);
};

const inputFilterMatrixSumGreaterThanTen = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(filterMatrixSumGreaterThanTen(inputFilterMatrixSumGreaterThanTen));

// 06
const filterStartsWithCapital = (arr) => {
    return arr.filter((str) => str[0] === str[0].toUpperCase());
};

const inputFilterStartsWithCapital = ["Maçâ", "banana", "Laranja"];
console.log(filterStartsWithCapital(inputFilterStartsWithCapital));

// Reduce
// 01
const reduceNumbersSum = (arr) => {
    return arr.reduce((acc, val) => acc + val, 0);
};

const inputReduceNumbersSum = [1, 2, 3, 4, 5];
console.log(reduceNumbersSum(inputReduceNumbersSum));

// 02
const reduceStringsConcat = (arr) => {
    return arr.reduce((acc, val) => acc + val);
};

const inputReduceStringsConcat = ["a", "b", "c"];
console.log(reduceStringsConcat(inputReduceStringsConcat));

// 03
const reduceObjectSumProperty = (arr, prop) => {
    return arr.reduce((acc, val) => acc + val[prop], 0);
};

const inputReduceObjectSumProperty = [
    { a: 1, b: 4, c: 5 },
    { a: 2, b: 10, c: 1 },
    { a: 3, b: 7, c: 4 },
];
console.log(reduceObjectSumProperty(inputReduceObjectSumProperty, "a"));

// 04
const reduceNumbersProduct = (arr) => {
    return arr.reduce((acc, val) => acc * val, 1);
};

const inputReduceNumbersProduct = [1, 2, 3, 4, 5];
console.log(reduceNumbersProduct(inputReduceNumbersProduct));

// 05
const reduceMatrixSum = (matrix) => {
    return matrix.reduce((acc, val) => acc + val.reduce((acc, val) => acc + val, 0), 0);
};

const inputReduceMatrixSum = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(reduceMatrixSum(inputReduceMatrixSum));

// 06
const reduceNumbersMax = (arr) => {
    return arr.reduce((acc, val) => (acc > val ? acc : val), -Infinity);
};

const inputReduceNumbersMax = [1, 2, 8, 4, 5];
console.log(reduceNumbersMax(inputReduceNumbersMax));