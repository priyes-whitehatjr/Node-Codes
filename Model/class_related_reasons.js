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

async function getAll(){    
    return await query( 'SELECT * FROM class_related_reason  order by created_at' );   
 }
 
 async function getBySessionID(req){
    return await  query('SELECT * FROM class_related_reason WHERE session_id =?',req) ; 
 }

 module.exports ={
    getAll,
    getBySessionID
}