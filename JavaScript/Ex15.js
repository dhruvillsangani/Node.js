// Write a method that turns a deep array into a plain array
// Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

let arr1 = [1, 2, [3, 4, [5]]]
console.log(arr1.flat(Infinity));

