const http = require("http");
const os = require("os");


http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("--------------- CPU ----------------\n"+JSON.stringify(os.cpus())+"\n"+"--------------- ARCHITECTURE ----------------\n"+JSON.stringify(os.arch())+"--------------- PLATFORM ----------------\n"+JSON.stringify(os.platform()));


}).listen(5012);


// Console will print the message
console.log('Server running at http://127.0.0.1:5012/');
