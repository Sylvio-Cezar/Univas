// 01
function printCresc(...elements) {
    return elements.sort();
    // elements.forEach(elem => {
    //     console.log(elem);
    // });
}

console.log(printCresc(5, 2, 8, 5, 7, 1, 3)); 

// 02
function occurPos(selected, ...elements) {
    return elements.indexOf(selected);
}

console.log(occurPos(5, 5, 2, 8, 5, 7, 1, 3));

// 03 
function concatArray(array1, array2) {
    return array1.concat(array2);
}

console.log(concatArray(["a", "b", "c"], [4, "a", 564566343543453453444452.7]));

// 04
function revertArray(array) {
    let reverseArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }

    return reverseArray;
}

console.log(revertArray(["a", "b", "c"]));
