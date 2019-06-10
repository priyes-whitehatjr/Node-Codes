const controller = require('../../Model/teacherSql')
const express = require('express');
const routerInstance = express.Router();
const sql = require('../../Model/sqlconfig/sql');
const connection = sql.db.get;


routerInstance.get('/', (req, res, next) => {
   
   controller.getTeacher()
      .then(rows => {
         res.set({ status: 200 });
         res.end(JSON.stringify(rows, null, 4));
      })
      .catch(error => {
         next(error);
      });
});
//throw new Error("Custom error"); 

routerInstance.get('/:id', (req, res, next) => {
   
   controller.getTeacherByID([req.params.id])
      .then(rows => {
         if (!rows.length == 0) {
            res.locals.rows = rows;
            return next("Error");
            
         }
         else
            console.log("No Data found");
      })
      .catch(error => {
         next(error);
      });




});

routerInstance.post('/', (req, res, next) => {
   var postData = req.body;
   console.log(postData);
   connection.query('INSERT INTO teacher_user VALUES (?)', postData, (error, results, fields) => {
      if (error) throw error;
      res.send([results, postData]);
   })
});


routerInstance.put('/', function (req, res) {
   connection.query('UPDATE `teacher_user` SET `name`=? WHERE `id`=? ', [req.body.name, req.body.id], (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
   });
});


routerInstance.delete('/:id', function (req, res) {
   connection.query('DELETE FROM `teacher_user` WHERE `id`=?', [req.params.id], function (error, results, fields) {
      if (error) throw error;
      res.end('Record has been deleted!');
   });
});

module.exports = routerInstance;