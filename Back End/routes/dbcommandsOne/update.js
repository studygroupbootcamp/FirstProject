const sql = require('../DBConnection')

module.exports = (req, res) => {
    var update = req.body
    console.log(update.name)
    
    var query = sql.query(
        "UPDATE people SET Favorite = " + "'" + update.Favorite + "'" + " WHERE name = " + "'" + update.name + "'", 
    )
    console.log(query.sql)
}