// - Write a JavaScript function to sort the following array of objects by title value. 
// Sample object :
// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];
// Expected result :
// {
//   author: ""Suzanne Collins"",
//   libraryID: 3245,
//   title:"Mockingjay:The Final Book of The Hunger Games"
// }, {
//   author: "Bill Gates",
//   libraryID: 1254,
//   title: "The Road Ahead"
// }, {
//   author: "Steve Jobs",
//   libraryID: 4264,
//   title: "Walter Isaacson"
// }]


// var arr = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
// ]
// arr.sort((a,b) => a.title.length - b.title.length);

// console.log(arr.sort((a,b) => b.title.length - a.title.length));

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
 let compareTitle = ((a,b) => {

  if (a.title < b.title) {
    return -1;
  }
     
   if (a.title > b.title) {
    return 1;
   }
     
     else{
      return 0;
     }
  

 })
  
 
 console.log(library.sort(compareTitle));
