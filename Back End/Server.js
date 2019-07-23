var express = require('express')
var app = express()
// we have to require the cors package to get around using cors. If this isnt working for you remember to npm install
var cors = require('cors')
//this is our routes folder. It contains further routes for commands.
var routes = require('./routes')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//we use cors to get around the whole CORS issues thing weve been dealing with. This just allows us to make calls from the front end since its our
//own website we dont have to worry.
app.use(cors());

var PORT = process.env.PORT || 3001;



//This is the start of our routes. It basically says / is the first part of any routes in the ./routes folder
app.use('/', routes)


app.listen(PORT, function(){
    console.log('server listening on port ' + PORT)
});

var date = new Date()
console.log(date)
var year = (date.getFullYear())
var day = (date.getDate())
var month = (date.getMonth() + 1)
var m0 = ""
var d0 = ""
if (day<10) {d0=0} else{d0=""}
if (month < 10) {m0 = 0} else {m0=''}
var fulldate = year+'-'+m0+''+month+'-'+d0+""+day
console.log(fulldate)