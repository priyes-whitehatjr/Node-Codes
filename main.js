const path = require('path');

require('dotenv').config({ path: path.join(__dirname,'./','./','Controller/','env/')+process.env.NODE_ENV+'.env' });

const express = require('express');
const PORT = process.env.PORT;
const server=express();
const teacherRouter = require(path.join(__dirname,'../ExpressServerDemo/Controller/routes/teachers'));
const sessionRouter = require(path.join(__dirname,'../ExpressServerDemo/Controller/routes/session'));
const teacherLogger = require(path.join(__dirname,'../ExpressServerDemo/Controller/Middleware/requestLogger'));
const teachercontroller = require(path.join(__dirname,'../ExpressServerDemo/Controller/Middleware/teacherController'));
const bodyParser = require('body-parser');
server.use(bodyParser.json());

server.use('/teacher',teacherLogger,teacherRouter,teachercontroller,(err, req, res, next)=>{
      
  console.log('My error:-',req.id);
  console.log('My error:-',err);

});
server.use('/session',sessionRouter);



server.listen(PORT, function() {
  console.log('listening at %s Environment :- %s', this.address().port,process.env.NODE_ENV);
});


