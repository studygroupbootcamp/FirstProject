const mysql = require('mysql')

//This is our connection to the database. Its passed to many files.
var connection = mysql.createConnection({
    //This is just telling it to run from your computer.
    host: "localhost",

    // Your port; if not 3306
    port: 3306,
    
    //This is your database user. You can actually add users but you will most likely use root for quite a while
    user: "root",

    //This is the password to your root account. Yours should be root. Please change it as my password will not work on your pc.
    password: "Jakeybear5",

    //This is the database we will be using for this connection. Usually you wont need more than 1 database.
    database: "project"
  });
  //This is just to log when your done connecting.
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });
  //this is telling all those files that this is being sent to. to specifically use connection when calling on this file.
  module.exports = connection