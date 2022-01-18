const db = require('../util/database');



module.exports  = class departmentDetails {
    constructor(department,dpId) {
    
        this.department = department;
        this.dpId = dpId;
    }

    save() {
      return db.execute(
        'INSERT INTO department(name,location) VALUES (?,?)',
        [this.department,this.dpId]
      );
    }

    static fetchAll() {
      return db.execute('SELECT * FROM department');
     }

     static deleteById(id) {     
     console.log("delete ID"+id);  
      return db.execute('DELETE FROM department WHERE id = ?',[id])
    }


}