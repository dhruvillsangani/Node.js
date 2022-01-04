// Write a method that returns an object composed of key-value pairs.
// Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 

let arr = [['a', 1], ['b', 2]];

 transformArr = ((arr) =>{
    const obj = Object.fromEntries(arr);
    return obj;
 })
// const obj = Object.fromEntries(arr);
console.log(transformArr(arr));
