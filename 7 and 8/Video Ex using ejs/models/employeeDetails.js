const fs =  require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'employee.json'
  );
  
  // const getProductsFromFile = (cb) => {
  //   fs.readFile(p, (err, fileContent) => {
  //     if (err) {
  //       cb = [];
  //     } else {
  //       cb(JSON.parse(fileContent));
  //     }
  //   });
  // };

module.exports  = class EmployeeDetails {
    constructor(index,name,id,department) {
        this.index = index;
        this.name = name;
        this.id = id;
        this.department = department;
    }

    save() {
        // getProductsFromFile(emp => {
        //     emp.push(this);
        //     fs.writeFile(p,JSON.stringify(emp),(err) =>{
        //         console.log(err);
        //     });
        // });

        
        const p = path.join(path.dirname(process.mainModule.filename),'data','employee.json');
        fs.readFile(p,(err,fileContent)=> {
            let emp = [];
            if(!err) {
                emp = JSON.parse(fileContent);
            }
            emp.push(this);
            fs.writeFile(p,JSON.stringify(emp),(err) =>{
                console.log(err);
            });
        });
    }

    static fetchAll() {
      
    //  getProductsFromFile(cb);
        fs.readFile(p,(err,fileContent) => {
            if(err) {
                return [];
            }
            return JSON.parse(fileContent)
        })
        return this.emp
     }
}