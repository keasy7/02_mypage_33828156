var http = require("http");
var fs = require("fs"); //used to read HTML file from filesystem

const port = 8000;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // HTTP header
    
    // Read the HTML file
    fs.readFile('aboutMe.html', 'utf8', function(err, data) { // utf is the encoding type
        if (err) {
            res.write('Error loading page');
            res.end();
            return;
        }
        res.write(data); //html content is sent to the client
        res.end();
    });
}).listen(port, function() {
    console.log("Server listening on: http://localhost:%s", port);
});
