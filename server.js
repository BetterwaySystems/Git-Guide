const express = require('express');
const app = express();


app.get('/', function(param, req, res){
    res.write(200);
    res.end('Github Guide');
})

app.get('/api/user', function(param, req, res){
    
    function authorization(){
        return '인증 사용자'
    }
    authorization();

    res.write(200);
    res.end('OK');

})


app.listen(3000);