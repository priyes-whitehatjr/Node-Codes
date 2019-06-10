const sql = require('./sqlconfig/sql');
const connection= sql.db.get;


function query(sql,args) {
    return new Promise( (resolve,reject) => {
          connection.query(sql,args, (error,rows) => {
            if (error)
                return reject(error);
            resolve(rows);
        });
    });
}


async function getTeacher(){    
   return await query( 'SELECT * FROM teacher_user' );   
}

async function getTeacherByID(req){      
    return await  query('SELECT * FROM teacher_user WHERE id=?',req) ; 
}

module.exports ={
    getTeacher,
    getTeacherByID
}