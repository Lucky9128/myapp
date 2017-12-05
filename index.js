var http = require("http");
http.createServer(function(req,res){
    res.write("Hellos");
    res.end();
}).listen(80);
                  