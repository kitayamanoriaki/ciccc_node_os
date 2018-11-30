const http = require("http");
const os = require("os");
const PORT = 5012

const server = http.createServer(
    
    (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("-- CPU --\n"
    +JSON.stringify(os.cpus())+"\n"
    +"--- ARCHITECTURE ---\n"
    +os.arch()+"\n"
    +"--- PLATFORM ---\n"
    +os.platform());

}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
