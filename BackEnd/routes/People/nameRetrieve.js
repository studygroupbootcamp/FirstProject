//Here we are telling our command what sql code to run before running this code. Think connection.connect. and all that stuff we would normally
//do in server.js But instead its just stored in 1 file.
const sql = require('../DBConnection')

module.exports=(req,res) => {
    info = req.body
    console.log(info.name)
    //Heres our actual sql query. Notice is uses the const we set up above. So it runs this command after whats in /DBConnection.
    sql.query("SELECT * FROM accounts WHERE name= "+'"'+info.name +'"', function(err, rows, res) {
        //This tells the console to throw an error if there is one. I had a LOT of these and this line got LOTS of use.
        if (err) throw err;
        //Here i had to do a weird thing since it wouldnt let me res.send inside of the query. So i had to store that outside in a function.
        //i then passed the data that was pulled to the function and used res.send there. What res.send does is actually send the data that
        //were getting from the database BACK to the original ajax call. The back end doesnt know we want data back unless we tell it!
        console.log(rows)
        if (rows.length == 0) {sqlquery2(info)}
        else{
        log(rows)}
        
        // Log all results of the SELECT statement
      });
      function sqlquery2(info){
        sql.query("SELECT * FROM accounts WHERE name LIKE '%"+info.name+"%'", function(err,response,res) {
          console.log(response)
          log2(response)
        })
      }
      //Here is my function being passed the data as "rows". It then passes that to res.send so it can send the data back.
      function log(rows){res.send(rows)}
      function log2(response){res.send(response)}

}