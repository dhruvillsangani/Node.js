const db = require('../util/database');




module.exports = class EmployeeDetails {
    constructor(index, fname, lname, departmentid) {
        this.index = index;
        this.name = fname;
        this.id = lname;
        this.department = departmentid;
    }

    edit() {
       

    }
   

    save() {

        return db.execute(
            'INSERT INTO Employee(firstname,lastname,departmentid) VALUES (?,?,?)',
            [this.name,this.id,this.department]
          );

            

    }

    static fetchAll() {

        return db.execute('SELECT * FROM Employee');

    }


     deleteById(id) {     
       

    }

    static fetchById(id) {
        console.log(db.execute('SELECT * FROM Employee WHERE Employee.id = ?',[id]));
        return db.execute('SELECT * FROM Employee WHERE Employee.id = ?',[id])
    }

    
}