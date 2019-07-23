const sql = require('../DBConnection')

//module.exports here just means that when this file is called it running THIS function. Notice the req, res. We have seen this before.
module.exports = (req, res) => {

    //We are now setting a new variable (newPerson) as the data that is being sent from ajax on the front end. req.body means the body of the
    //data that is being sent. Without .body the code wouldnt know how to accept the data.
    var newFriend = req.body
    sql.query(
        "SELECT * FROM relationships WHERE UIDFrom = " + newFriend.FROMId + " AND UIDTo = " + newFriend.TOId , function(err, rows, res) {
            console.log(rows)
            if(rows.length == 0) {addFriend()}
         else{console.log('your already friends')
        }
        }
    )
    //Heres our actual sql query. Notice is uses the const we set up above. So it runs this command after whats in /DBConnection.
    function addFriend() {sql.query(
        //our actual SQL code inserting a new row.
        "INSERT INTO relationships SET ?",
        //What our row is going to look like. Notice newPerson.name/email/password. the data being sent came in the form of an object. it had the
        //keys of name email and password. So we can specifically target those.
        {
            UIDFrom: newFriend.FROMId,
            UIDTo: newFriend.TOId
        })}
}