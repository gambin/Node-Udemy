var http = require('http');

var server = http.createServer(function(req, res){
    var recurso = req.url.substring(1);
    var categoria = "";
    
    if (recurso != '' && recurso != 'favicon.ico'){
        console.log(recurso);
        categoria = " - " + recurso.toUpperCase();
    }
    res.end("<html><body><h1> Portal de Notícias " + categoria + " </h1></body></html>");
});

server.listen(3000);