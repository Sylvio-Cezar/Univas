/* --- Lista de exercícios 04 --- */ 

// ForEach
// 01 
const arrNumbers = [0, 1, 2, 3, 4, 5];

arrNumbers.forEach(element => {
    console.log(element);
});

// 02
const arrString = ["Primeira string", "Segunda string", "Terceira string"];

function getUpper(arr) {
    arr.forEach(element => {
        console.log(element.toUpperCase());
    });
}

getUpper(arrString);

// 03
const arrObj = [
    { name: 'Nome 1', age: 25 },
    { name: 'Nome 2', age: 30 },
    { name: 'Nome 3', age: 35 },
];

arrObj.forEach(element => {
    if (Math.random() >= 0.5) {
        console.log(element.name);
    } else {
        console.log(element.age);
    }
});

// 04 
const arrNumbers2 = [0, 1, 2, 3, 4, 5];

function sumArr(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(sumArr(arrNumbers));

// 05
const matrix = [[1,2], [3,4], [5,6]];

function lineSum(arr) {
    arr.forEach((element, index) => {
        let lineSum = 0;
        element.forEach(element => {
            lineSum += element;
        });
        console.log(`Linha ${++index}: ${lineSum}`)
    });
}

lineSum(matrix);

// 06 
const arrArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

arrArrays.forEach(array => {
    console.log(Math.max(...array))
});

// Map
// 01
const arrNumbers3 = [0, 1, 2, 3, 4, 5];

function doubleArr(arr) {
    const newArr = arr.map(element => {
        return element * 2;
    });

    return newArr;
}

console.log(doubleArr(arrNumbers3));

// 02
const arrWords = ["Array", "de", "palavras"];

function upperWords(arr) {
    const arrUpperWords = arr.map(element => {
        return element.toUpperCase();
    });

    return arrUpperWords;
}

console.log(upperWords(arrWords));

// 03
const arrObj2 = [
    { name: 'Nome 1', age: 25 },
    { name: 'Nome 2', age: 30 },
    { name: 'Nome 3', age: 35 },
];

function getKey(arr) {
    const arrObjKey = arr.map(element => {
        if (Math.random() >= 0.5) {
            return element.name;
        } else {
            return element.age;
        }
    });

    return arrObjKey;
}

console.log(getKey(arrObj2));

// 04
const arrString2 = ["Primeira string", "Segunda string", "Terceira string"];

function getSizes(arr) {
    const arrSize = arr.map(element => {
        return element.length;
    });

    return arrSize;
}

console.log(getSizes(arrString2));

// 05
const matrix2 = [[1,2], [3,4], [5,6]];

function getMatrixSum(arr) {
    const matrixSum = arr.map(element => {
        let lineSum = 0;
        element.forEach(element => {
            lineSum += element;
        });
        return lineSum;
    });
    
    return matrixSum
}

console.log(getMatrixSum(matrix2));

// 06
const squareRoots = (numbers) => {
    return numbers.map(number => Math.round(Math.sqrt(number)));
};
  
const arr = [2, 7, 9, 16, 25];

console.log(squareRoots(arr));