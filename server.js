var hamza = require("http"); 
hamza.createServer(   
    
    function(request, response){
    response.writeHead(200,{'Content-Type':'Text/Plain'});
    response.end('<h1>Hello Node!!!!</h1>\n');
    }


    ).listen(3000);

    