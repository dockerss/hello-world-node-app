//importing node framework
var express = require('express');
 
var app = express();
app.get('/', function (req, res) {

    //Respond with "hello world" for requests that hit our root "/"
    res.send('hello world');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;