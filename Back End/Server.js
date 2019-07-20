var http = require('http')
var express = require('express')
var app = express()
var routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = 3001

var server = http.createServer()


app.use('/api', routes)


server.listen(PORT, function(){
    console.log('server listening on port ' + PORT)
});