const db = require('../util/database');




module.exports = class EmployeeDetails {
    constructor(index, fname, lname, departmentid) {
        this.index = index;
        this.name = fname;
        this.id = lname;
        this.department = departmentid;
    }

    edit(id,firstname,lastname,departmentid) {
        return db.execute(
            'UPDATE Employee SET firstname= ?,lastname = ?,departmentid = ?  WHERE id = ?',
            [firstname,lastname,departmentid,id]
          );

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
       console.log(id);
             db.execute('DELETE FROM Employee  WHERE  id= ?',[id])
            //   db.execute('DELETE FROM department  WHERE id= ?',[id])
            
    }

    static fetchById(id) {
     
        return db.execute('SELECT * FROM Employee WHERE Employee.id = ?',[id])
    }

    
}