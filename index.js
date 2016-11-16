var express=require('express');
var app = express();
var routes=require('./routes/routes.js');


app.use(express.static(__dirname + "/public"));

app.get('/employee', routes.getEmployee);


var port = process.env.PORT || 4000;
app.listen(port, function(){

    console.log('HTTP server is listening on port '+ port);
});