 // Convert following function into arrow function 
// 1)
// function sum(num1, num2){
//     return num1 + num2
// }

// sum(41,2)
// sum(43,0)
// console.log(""the answer to everything is"", sum(43,0))


const sum = ((num1,num2) =>{
    return num1+num2;
});

sum(41,2);
sum(43,0);
console.log("the answer to everything is", sum(41,2))
console.log("the answer to everything is", sum(43,0))