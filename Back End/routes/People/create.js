//Here we are telling our command what sql code to run before running this code. Think connection.connect. and all that stuff we would normally
//do in server.js But instead its just stored in 1 file.
const sql = require('../DBConnection')

//module.exports here just means that when this file is called it running THIS function. Notice the req, res. We have seen this before.
module.exports = (req, res) => {
    var date = new Date()
    var year = (date.getFullYear())
    var day = (date.getDate())
    var month = (date.getMonth() + 1)
    var m0 = ""
    var d0 = ""
    if (day < 10) { d0 = 0 } else { d0 = "" }
    if (month < 10) { m0 = 0 } else { m0 = '' }
    var fulldate = year + '-' + m0 + '' + month + '-' + d0 + "" + day
    //We are now setting a new variable (newPerson) as the data that is being sent from ajax on the front end. req.body means the body of the
    //data that is being sent. Without .body the code wouldnt know how to accept the data.
    var newPerson = req.body

    //Heres our actual sql query. Notice is uses the const we set up above. So it runs this command after whats in /DBConnection.
    var query = sql.query(
        //our actual SQL code inserting a new row.
        "INSERT INTO accounts SET ?",
        //What our row is going to look like. Notice newPerson.name/email/password. the data being sent came in the form of an object. it had the
        //keys of name email and password. So we can specifically target those.
        {
            name: newPerson.name,
            email: newPerson.email,
            password: newPerson.password,
            date_created: fulldate
        })
}