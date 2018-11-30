const http = require("http");
const os = require("os");
const PORT = 5012

const server = http.createServer(

    (request, response) => {

    // Properties inside of HTTP Headers
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Show the output
    response.write("-- CPU --\n"
    +JSON.stringify(os.cpus())+"\n"
    +"--- ARCHITECTURE ---\n"
    +os.arch()+"\n"
    +"--- PLATFORM ---\n"
    +os.platform());

    // Let server know sending data has done!
    response.end();

}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
