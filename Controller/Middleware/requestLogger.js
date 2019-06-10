function requestLogger(req, res, next){

  let log = {
    'time' : Date.now(),
    'request_type': req.method,
    'hostname' : req.hostname,
    'ip' : req.ip,
    'original_URL' : req.originalUrl,
    'base_URL' : req.baseUrl,
    'path' : req.path,
    'body':  req.body
  };
  console.log(log);
  next();

}


module.exports=requestLogger;