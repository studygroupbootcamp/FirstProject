var express = require('express')
var app = express()
var cors = require('cors')
var routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

var PORT = 3001




app.use('/', routes)


app.listen(PORT, function(){
    console.log('server listening on port ' + PORT)
});