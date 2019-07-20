const sql = require('../DBConnection')

module.exports = (req, res) => {
    var newPerson = req.body
    console.log(newPerson.name)
    
    var query = sql.query(
        "INSERT INTO people SET ?", 
    {
        name: newPerson.name,
        Favorite: newPerson.Favorite
    },
    )
    console.log(query.sql)
}