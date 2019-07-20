const sql = require('../DBConnection')

module.exports = (req, res) => {
    var deleteN = req.body
    console.log(deleteN.name)
    
    var query = sql.query(
        "DELETE FROM people WHERE name='" + deleteN.name + "'", 
    )
    console.log(query.sql)
}