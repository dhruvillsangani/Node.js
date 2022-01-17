const fs =  require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'department.json'
  );
  

  const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb = ([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };

module.exports  = class departmentDetails {
    constructor(department,dpId) {
    
        this.department = department;
        this.dpId = dpId;
    }

    save() {
        getProductsFromFile(dept => {
            dept.push(this);
            fs.writeFile(p,JSON.stringify(dept),err =>{
                console.log(err);
            });
        });

    //     const p = path.join(path.dirname(process.mainModule.filename),'data','department.json');
    //     fs.readFile(p,(err,fileContent)=> {
    //         let dept = [];
    //         if(!err) {
    //             dept = JSON.parse(fileContent);
    //         }
    //         dept.push(this);
    //         fs.writeFile(p,JSON.stringify(dept),(err) =>{
    //             console.log(err);
    //         });
    //     });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
     }
}