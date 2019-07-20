//Here we are telling our command what sql code to run before running this code. Think connection.connect. and all that stuff we would normally
//do in server.js But instead its just stored in 1 file.
const sql = require('../DBConnection')

module.exports = (req, res) => {
    //we store the req from ajax in a variable called update.
    var update = req.body
    //Heres our actual sql query. Notice is uses the const we set up above. So it runs this command after whats in /DBConnection.
    sql.query(
        //This query is updating passwords based on a name given and the new password they want. Its taken from update which is taken from
        //the actual ajax request.
        "UPDATE people SET password = " + "'" + update.password + "'" + " WHERE name = " + "'" + update.name + "'", 
    )
}