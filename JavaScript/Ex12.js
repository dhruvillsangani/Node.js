// - Write a function that reverts the input array. Please, do not use array.reverse(); to make this task more enjoyable
let arr = [1,2,3];
let arr2 = [];
for(i=arr.length-1;i>= 0;i--) {
    arr2.push(arr[i]);
    
}
console.log(arr2);
// console.log(arr.reverse());