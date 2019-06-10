function sendResponse(req,res){
    res.set({status:200});
    res.end(JSON.stringify(res.locals.rows,null,4));
   

    
}



module.exports= sendResponse;