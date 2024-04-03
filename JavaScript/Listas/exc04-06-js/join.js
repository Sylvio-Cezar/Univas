/* --- Lista de exercícios 06 --- */

// Join
// 01
function joinWithSpace(arr) {
    return arr.join(" ");
}

const words = ["juntou", "palavras"];

console.log(joinWithSpace(words));

// 02
function joinWithComma(arr) {
    return arr.join(", ");
}

const words2 = ["juntou", "com", "vírgula"];
console.log(joinWithComma(words2));

// 03
function joinWithDash(arr) {
    return arr.join("-");
}

const numbers = [1, 2, 3, 4, 5];
console.log(joinWithDash(numbers));

// 04 
function formatDates(arr) {
    return arr
        .map((date) => `${date.getDate()}/${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}/${date.getFullYear()}`)
        .join("; ");
}

const dates = [new Date("2024-04-03"), new Date("2024-03-04")];
console.log(formatDates(dates));

// 05
function joinMatrix(matrix) {
    return matrix.join("; ").replace(/\[|]|"/g, "");
}

const matrix = [
    ["junta", "tudo"],
    [1, 2, 3],
];
console.log(joinMatrix(matrix));

// 06 
function joinInUpperCase(arr) {
    return arr.join(" ").toUpperCase();
}

const words3 = ["tudo", "junto", "grande"];
console.log(joinInUpperCase(words3));