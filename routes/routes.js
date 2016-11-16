

exports.getEmployee=function(req,res){
    console.log('Inside get routes');
    var data = {name:"Hari", age:"30"};
    res.send(JSON.stringify(data));

    
};