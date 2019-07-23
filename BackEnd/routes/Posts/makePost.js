const sql = require('../DBConnection')

//module.exports here just means that when this file is called it running THIS function. Notice the req, res. We have seen this before.
module.exports = (req, res) => {

    //We are now setting a new variable (newPerson) as the data that is being sent from ajax on the front end. req.body means the body of the
    //data that is being sent. Without .body the code wouldnt know how to accept the data.
    var newpost = req.body
    sql.query(
        //our actual SQL code inserting a new row.
        "INSERT INTO Posts SET ?",
        //What our row is going to look like. Notice newPerson.name/email/password. the data being sent came in the form of an object. it had the
        //keys of name email and password. So we can specifically target those.
        {
            PosterName: newpost.postername,
            PosterId: newpost.posterid,
            Head: newpost.head,
            Body: newpost.body
        }
    )
}
