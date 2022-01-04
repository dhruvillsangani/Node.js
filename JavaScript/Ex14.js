// Write a method that makes a shallow compare of two arrays and returns true if they are identical.
// Expected Result: ([1, 2, 3], [1, 2, 3]) => true 

let arr1 = [2,2,3];
let arr2 = [1,2,3];

comapareArr = ((arr1,arr2)=>{
  
    if(arr1.length!=arr2.length)
     return "False";
     
    else
    {
     for(var i=0;i<arr1.length;i++)
     if(arr1[i]!=arr2[i]) {
        return "False";
     }
      else {
        return "True";
      }
     
    }
  
    
})
console.log(comapareArr(arr1,arr2));
