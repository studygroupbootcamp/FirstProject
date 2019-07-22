
const sql = require('../DBConnection')

module.exports=(req,res) => {
    var postinfo = req.body
    sql.query("SELECT * FROM posts WHERE posterid=" + postinfo.posterid, function(err, rows, res) {
        if (err) throw err;
        log(rows)
        console.log(rows)
      });
      function log(rows){res.send(rows)}

}