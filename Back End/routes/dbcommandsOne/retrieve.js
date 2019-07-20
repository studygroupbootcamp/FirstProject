const sql = require('../DBConnection')

module.exports=(req,res) => {
    
    
    sql.query("SELECT * FROM people", function(err, rows, res) {
        
        if (err) throw err;
        console.log (rows[1].id)
        log(rows)
        // Log all results of the SELECT statement
      });
      function log(rows){res.send(rows)}

}