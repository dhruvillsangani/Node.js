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
       
            return db.execute('DELETE FROM department,Employee USING department INNER JOIN Employee ON department.id = Employee.departmentid WHERE Employee.departmentid= ?',[id])
    }

    static fetchById(id) {
     
        return db.execute('SELECT * FROM Employee WHERE Employee.id = ?',[id])
    }

    
}