const sql = require('../DBConnection')

module.exports=(req,res) => {
    
    var userID = req.body

    sql.query("SELECT * FROM relationships WHERE UIDfrom = " + userID.UIDFrom, function(err, rows, res) {
        var queryids = []
        if (err) {console.log('you have no friends')};
        for (i=0; i<rows.length;i++) {
            queryids.push(rows[i].UIDTo)
            
        }
        queryids.push(userID.UIDFrom)
        
        console.log(queryids)
        if (queryids.length == 0) {console.log('you have no friend posts to show')}
        else{
            console.log(userID)
            query2(queryids)
        }
        
      });

      function query2(queryids){ 
         sql.query("SELECT * FROM posts WHERE posterid IN ("+queryids+")", function(err, dat, res){
              if (err) throw err;
              sendr(dat)
            });  
            function sendr(dat){
                res.send(dat)
            }}}