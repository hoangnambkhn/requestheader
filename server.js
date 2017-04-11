var express = require("express");
var app = express();
var path = require('path');

app.get('/',function(req,res){
//   var fileName = path.join(__dirname, 'index.html');
//   res.sendFile(fileName, function (err) {
//     if (err) {
//       console.log(err);
//       res.status(err.status).end();
//     }
//     else {
//       console.log('Sent:', fileName);
//     }
//   });

    var data = {}
    data.ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    data.language = req.headers['accept-language'].split(',')[0];
    data.system = req.headers["user-agent"].match(/\((.*?)\)/)[1];
    res.json(data);
})

app.get('/:datestring', function(req,res){
    // var data = {}
    // data.ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    // data.language = req.headers['accept-language'].split(',')[0];
    // data.system = req.headers["user-agent"].match(/\((.*?)\)/)[1];
    // res.json(data);
    
});
app.listen(8080, function(err){
    if(err) return console.error(err);
    console.log("server listen on 8080" );
})

