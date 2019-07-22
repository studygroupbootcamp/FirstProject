const sql = require('../DBConnection')

module.exports=(req,res) => {
    
    var userID = req.body

    sql.query("SELECT * FROM relationships WHERE UIDfrom = " + userID.UIDFrom, function(err, rows, res) {
        var queryids = []
        if (err) throw err;
        for (i=0; i<rows.length;i++) {
            queryids.push(rows[i].UIDTo)
        }
        console.log(queryids)
        query2(queryids)
      });

      function query2(queryids){ 
         sql.query("SELECT * FROM posts WHERE posterid IN ("+queryids+")", function(err, dat, res){
              if (err) throw err;
              sendr(dat)
            });  
            function sendr(dat){
                res.send(dat)
            }}}