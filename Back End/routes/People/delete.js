//Here we are telling our command what sql code to run before running this code. Think connection.connect. and all that stuff we would normally
//do in server.js But instead its just stored in 1 file.
const sql = require('../DBConnection')

module.exports = (req, res) => {
    var deleteN = req.body
    //Heres our actual sql query. Notice is uses the const we set up above. So it runs this command after whats in /DBConnection.
    var query = sql.query(
        //The row to delete is being taken from the ajax request.
        "DELETE FROM accounts WHERE name='" + deleteN.name + "'", 
    )
}