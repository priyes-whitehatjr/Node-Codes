const controller =require('../../Model/class_related_reasons');
const express = require('express');
const routerInstance = express.Router();
const sql = require('../../Model/sqlconfig/sql');




routerInstance.get('/',(req,res)=>{      
    controller.getAll()
    .then( rows => {
       res.set({status:200});
       res.end(JSON.stringify(rows,null,4));
    })
    .catch((error)=>{
            console.log(error);
    });                 
});

routerInstance.get('/:id', (req, res, next) => {
    controller.getBySessionID([req.params.id])
    .then(rows=>{
    
    res.end(JSON.stringify(rows,null,4));               
    })
    .catch((error)=>{
    console.log(error);
    });     
});

module.exports=routerInstance;