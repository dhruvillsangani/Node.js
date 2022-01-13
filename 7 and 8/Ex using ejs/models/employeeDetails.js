const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'employee.json'
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

module.exports = class EmployeeDetails {
    constructor(index, name, id, department) {
        this.index = index;
        this.name = name;
        this.id = id;
        this.department = department;
    }

    edit() {
        getProductsFromFile(emp => {
            const existingEmpindex = emp.findIndex(e => e.id === this.id);
            const updatedEmpDetails = [...emp];
            updatedEmpDetails[existingEmpindex] = this;
            fs.writeFile(p, JSON.stringify(updatedEmpDetails), err => {
                console.log(err);
            });
        });

    }
   

    save() {

        getProductsFromFile(emp => {

            if (this.index != undefined || this.index != null) {
                console.log("this.index " + this.index)
                const existingEmpindex = emp.findIndex(e => e.id === this.id);
                const updatedEmpDetails = [...emp];
                updatedEmpDetails[existingEmpindex] = this;
                fs.writeFile(p, JSON.stringify(updatedEmpDetails), err => {
                    console.log(err);
                });
            }
            else {
                this.index = Math.floor(Math.random() * 1000).toString();
                emp.push(this);
                fs.writeFile(p, JSON.stringify(emp), err => {
                    console.log(err);
                });


            }

        });

    }

    static fetchAll(cb) {

        getProductsFromFile(cb);

    }


     deleteById(id) {     
        getProductsFromFile(emps => {
            console.log("Id = "+id)
            const updateEmployeeDetails  =  emps.filter(e => e.index !== id)
            fs.writeFile(p, JSON.stringify(updateEmployeeDetails), err => {
                    console.log(err);
            });
        })

    }

    static fetchById(id, cb) {
        getProductsFromFile(emps => {
            const emp = emps.find(e => e.index == id)
            cb(emp);
        });

    }

    
}