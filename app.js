var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client/'));
app.get('/', function(req, res) {
    res.sendFile('index.html');
});
const PORT = 8080;
const HOST = '0.0.0.0';
var server = app.listen(PORT, HOST, function() {
    console.log('Node server is running on port ' + PORT);
});
