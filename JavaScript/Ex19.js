// Create a function which remove a random element in the items array and return a new array
//  without that item

let arr = [1,3,5,4,2]
removeRandomElement = (arr)=>{
        
    var item = Math.floor(Math.random()*arr.length);
    console.log(item);
    arr.splice(item,1);
    console.log(arr);
     
}

removeRandomElement(arr)