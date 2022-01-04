// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

let arr = [1,2,2,3,5,4,5,5];

let union = [...new Set([...arr])];
console.log(union);

var arr2 = [1,'b','c','d'];
arr2.filter(x =>{
    return x == 'a'
})
console.log(arr2.filter(x =>{
    return x == 1
}));

