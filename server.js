const express = require('express');
const app = express();


app.get('/', function(param, req, res){
    res.write(200);
    res.end('Github Guide');
})


app.listen(3000);