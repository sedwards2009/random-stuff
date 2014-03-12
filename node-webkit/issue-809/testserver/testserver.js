var http = require("http");
var url = require("url");
var fs = require("fs");

function handleRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    var filename = null;
    
    console.log("-> ",pathname);
    
    if (pathname === "/") {
        filename = "testpage.html";
    } else if (pathname === "/popuppage.html") {
        filename = "popuppage.html";
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("It's not here. Sod off!");
        response.end();
        return;
    }
    
    response.writeHead(200, {"Content-Type": "text/html"});
    var filebody = fs.readFileSync(filename);
    response.write(filebody);
    response.end();
}

console.log("Starting web server.");
http.createServer(handleRequest).listen(8888);
