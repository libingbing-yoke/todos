let arr = [1, 1, 2, 2, 7, 8, 8, 9, 3, 3, 4, 4, 5, 5, 6, 6, 7, ]
let arr1 = [3, 4, 5, 6, 7, 8]
let arr2 = [];
// arr.forEach(element => {
//     if (!arr2.includes(element)) {
//         arr2.push(element)
//     }
//     return arr2
// });
// console.log(arr2);

// arr.forEach(element => {
//     if (arr1.includes(element)) {
//         arr2.push(element)
//     }
//     return arr2
// });
// console.log(arr2);

// let newArr = arr.filter((item, index) => {
//     return arr.indexOf(item, 0) === index
// })
// console.log(newArr);

// let newArr = arr.sort((a, b) => b - a)

// console.log(arr);
// console.log(newArr);
// console.log(newArr === arr);

function getMax(arr) {
    return Math.max(...arr)
}

function getMin(arr) {
    return Math.min(...arr)
}

console.log(getMax(arr));
console.log(getMin(arr));