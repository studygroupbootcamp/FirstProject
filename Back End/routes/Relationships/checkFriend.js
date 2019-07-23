const sql = require('../DBConnection')

module.exports=(req,res) => {
    
    var checkFriend = req.body

    sql.query("SELECT * FROM relationships WHERE UIDfrom = " + checkFriend.UIDFrom +" AND UIDTo="+checkFriend.UIDTo, function(err, rows, res) {
        if (err) throw err;
        console.log(rows)
        send(rows)
      })
      function send(rows){res.send(rows)}
    }