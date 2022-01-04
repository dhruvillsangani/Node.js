// - Write a JavaScript program to compute the union of two arrays. 
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Output: [1, 2, 3, 10, 100]


let a = [34, 35, 45, 48, 49];
let b = [48, 55];
let union = [...new Set([...a, ...b])];
console.log(union);