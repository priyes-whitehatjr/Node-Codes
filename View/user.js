const axios = require('axios');


axios.get('http://localhost:9001/teacher/1')
  .then(function (response) {
    
    console.log({
        
        status : response.status, 
        data: response.data});
  })
  .catch(function (error) {
    
    console.log(error);
  });