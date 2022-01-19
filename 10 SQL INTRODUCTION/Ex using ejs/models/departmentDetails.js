const db = require('../util/database');



module.exports  = class departmentDetails {
    constructor(department,dpId) {
    
        this.department = department;
        this.dpId = dpId;
    }

    save() {
      return db.execute(
        'INSERT INTO department(name,place) VALUES (?,?)',
        [this.department,this.dpId]
      );
    }
        deleteById(id) {     
      console.log("delete ID"+id);  
      db.execute('DELETE FROM Employee  WHERE  departmentid= ?',[id])
      db.execute('DELETE FROM department  WHERE id= ?',[id])
     }

    static fetchAll() {
      return db.execute('SELECT * FROM department');
     }

   


}