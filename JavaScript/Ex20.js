// Create a function which return a new object with all the keys and values 
// from obj and a new key/value pair

let obj1 = {'a':1,'b':2};

  addNewObj = (obj)=>{
       let obj2 = Object.assign(obj,obj1)

      console.log(obj2);
  }

  addNewObj({'cd':1,'c':2})
  
