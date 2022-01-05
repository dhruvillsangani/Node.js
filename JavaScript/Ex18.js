// Write a function which merge two objects
// mergeObjects({a:1, b:2}, {c:3, d:4}) 
// Output: {a:1, b:2, c:3, d:4}



mergeObjects = (obj1 ,obj2)=>{
obj2 =  Object.assign(obj1,obj2);
console.log(obj2);
}

mergeObjects({a:1, b:3}, {c:3, d:4});