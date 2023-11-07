const array1 = ["apple", "banana", "orange", "mango", "kiwi"];
const array2 = ["orange", "grape", "kiwi", "pear", "melon"];
const notCommonElements = [];
for (const element of array1) {
    if (!array2.includes(element)) {
        notCommonElements.push(element);
    }
}
for (const element of array2) {
    if (!array1.includes(element)) {
        notCommonElements.push(element);
    }
}
console.log("Elements not common between arrays:", notCommonElements);
for (const element1 of array1) {
    if (!(array2.includes(element1))) {
        console.log(`${element1} available`);
    }
    else {
        console.log(`${element1} not available`);
    }
}
export {};
